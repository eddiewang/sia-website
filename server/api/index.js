const router = require('express').Router()
const axios = require('axios')
const hosts = require('../hostdb/active_hosts.json')
const fs = require('fs')
const CoinMarketCap = require('coinmarketcap-api')

const cmc = new CoinMarketCap()

router.get('/test', (req, res) => {
  res.send({ result: 'success' })
})

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

router.get('/marketcap', (req, res) => {
  cmc
    .getTicker({
      currency: 'siacoin'
    })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.get('/hosts', (req, res) => {
  axios
    .get('https://siastats.info/dbs/hostscoordinates.json')
    .then(({ data }) => {
      res.send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.get('/stats', (req, res) => {
  axios
    .get('https://siastats.info/dbs/hostsRTdb.json')
    .then(({ data }) => {
      res.send(data[0])
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.get('/siahub/network', (req, res) => {
  axios
    .get('https://siahub.info/api/network')
    .then(({ data }) => {
      res.send(data[data.length - 1])
    })
    .catch(err => {
      res.status(400).send(err)
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

router.get('/github', (req, res) => {
  axios
    .all([getCommits(), getForks(), getReleases()])
    .then(
      axios.spread((commits, forks, releases) => {
        let total_commits = 0
        commits.data.forEach(d => {
          total_commits += d.contributions
        })
        res.send({
          total_commits,
          total_contributors: commits.data.length,
          total_forks: forks.data.items[0].forks_count,
          total_releases: releases.data.length
        })
      })
    )
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router
