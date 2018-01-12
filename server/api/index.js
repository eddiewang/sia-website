const router = require('express').Router()
const axios = require('axios')
const hosts = require('../hostdb/active_hosts.json')
const fs = require('fs')
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

router.get('/hosts', (req, res) => {
  const h = hosts.hosts
  const ips = h.map(x => x.netaddress)
  let n = 0
  ips.forEach(i => {
    n++
    let ip = i.split(':')[0]
    console.log('ip is', ip)
    axios
      .get(`http://freegeoip.net/json/${ip}`)
      .then(result => {
        const { data } = result
        pushLocation(data.longitude, data.latitude)
      })
      .catch(err => console.log('ERROR', err))
  })
  res.send({ done: 'success' })
})

module.exports = router
