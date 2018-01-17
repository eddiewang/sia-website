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
  cmc.getTicker({
    currency: 'siacoin'
  }).then(data => {
    res.send(data)
  }).catch(err => {
    res.status(400).send(err)
  })
})

router.get('/hosts', (req, res) => {
  axios.get('https://siastats.info/dbs/hostscoordinates.json')
  .then(({data}) => {
    res.send(data)
  }).catch(err => {
    res.status(400).send(err)
  })
})

router.get('/stats', (req, res) => {
  axios.get('https://siastats.info/dbs/hostsRTdb.json')
  .then(({data}) => {
    res.send(data[0])
  }).catch(err => {
    res.status(400).send(err)
  })
})

module.exports = router
