const router = require('express').Router()
const axios = require('axios')
const hosts = require('../hostdb/active_hosts.json')
const fs = require('fs')
const CoinMarketCap = require('coinmarketcap-api')
const NodeCache = require('node-cache')
const cache = new NodeCache({ stdTTL: 900, checkperiod: 600 })

const cmc = new CoinMarketCap()

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.414, 37.776]
      }
    }
  ]
}

const pushLocation = (long, lat) => {
  geojson.features.push({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [long, lat]
    }
  })
  fs.writeFile('hosts_geojson.json', JSON.stringify(geojson), 'utf8')
}

// keys
const PRICE = 'price_data'
const HOSTS = 'host_data'
const STATS = 'sia_stats'
const SIAHUB = 'siahub'
const GITHUB = 'github'
const DOWNLOADS = 'downloads'

router.get('/marketcap', (req, res) => {
  cache.get(PRICE, (err, val) => {
    if (!err) {
      if (val === undefined) {
        cmc
          .getTicker({
            currency: 'siacoin'
          })
          .then(data => {
            cache.set(PRICE, data)
            res.send(data)
          })
          .catch(err => {
            res.status(400).send(err)
          })
      } else {
        res.send(val)
      }
    }
  })
})

router.get('/hosts', (req, res) => {
  cache.get(HOSTS, (err, val) => {
    if (!err) {
      if (val === undefined) {
        axios
          .get('https://siastats.info/dbs/hostscoordinates.json')
          .then(({ data }) => {
            cache.set(HOSTS, data)
            res.send(data)
          })
          .catch(err => {
            res.status(400).send(err)
          })
      } else {
        res.send(val)
      }
    }
  })
})

router.get('/stats', (req, res) => {
  cache.get(STATS, (err, val) => {
    if (!err) {
      if (val === undefined) {
        axios
          .get('https://siastats.info/dbs/hostsRTdb.json')
          .then(({ data }) => {
            cache.set(STATS, data[0])
            res.send(data[0])
          })
          .catch(err => {
            res.status(400).send(err)
          })
      } else {
        res.send(val)
      }
    }
  })
})

router.get('/siahub/network', (req, res) => {
  cache.get(SIAHUB, (err, val) => {
    if (!err) {
      if (val === undefined) {
        axios
          .get('https://siahub.info/api/network')
          .then(({ data }) => {
            cache.set(SIAHUB, data[data.length - 1])
            res.send(data[data.length - 1])
          })
          .catch(err => {
            res.status(400).send(err)
          })
      } else {
        res.send(val)
      }
    }
  })
})

function getCommits() {
  return axios.get('https://api.github.com/repos/NebulousLabs/Sia/contributors?per_page=100')
}

function getForks() {
  return axios.get('https://api.github.com/search/repositories?q=user%3ANebulousLabs+repo%3ASia')
}

function getReleases() {
  return axios.get('https://api.github.com/repos/NebulousLabs/Sia/releases?per_page=100')
}

function getUIReleases() {
  return axios.get('https://api.github.com/repos/NebulousLabs/Sia-UI/releases?per_page=100')
}

router.get('/github', (req, res) => {
  cache.get(GITHUB, (err, val) => {
    if (!err) {
      if (val === undefined) {
        axios
          .all([getCommits(), getForks(), getReleases()])
          .then(
            axios.spread((commits, forks, releases) => {
              let total_commits = 0
              commits.data.forEach(d => {
                total_commits += d.contributions
              })
              const githubStats = {
                total_commits,
                total_contributors: commits.data.length,
                total_forks: forks.data.items[0].forks_count,
                total_releases: releases.data.length
              }
              cache.set(GITHUB, githubStats)
              res.send(githubStats)
            })
          )
          .catch(err => {
            res.status(400).send(err)
          })
      } else {
        res.send(val)
      }
    }
  })
})

router.get('/downloadstats', (req, res) => {
  cache.get(DOWNLOADS, (err, val) => {
    if (!err) {
      if (val === undefined) {
        let totalSiaCount = 0
        let totalSiaUICount = 0
        axios
          .all([getReleases(), getUIReleases()])
          .then(
            axios.spread((sia, siaui) => {
              sia.data.forEach(d => {
                let currCount = 0
                d.assets.forEach(a => {
                  currCount += a.download_count
                })
                totalSiaCount += currCount
              })

              siaui.data.forEach(d => {
                let currCount = 0
                d.assets.forEach(a => {
                  currCount += a.download_count
                })
                totalSiaUICount += currCount
              })
              const downloadStat = {
                sia: totalSiaCount,
                siaui: totalSiaUICount
              }
              cache.set(DOWNLOADS, downloadStat)

              res.send(downloadStat)
            })
          )
          .catch(err => {
            res.status(400).send(err)
          })
      } else {
        res.send(val)
      }
    }
  })
})

module.exports = router
