import * as React from 'react'
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer } from 'react-mapbox-gl'
import geojson from './geojson.json'
import * as styles from './Map.scss'

interface Props {
  data?: any
  width?: number
  height?: number
}

const MapBox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZWRkaWV3YW5nIiwiYSI6ImNqY2EzenN3OTA4NTgyd3A1MWRydWZqYTAifQ.6Ni0LTAYS5vVnjSNduZawA',
  interactive: true,
  scrollZoom: false,
  attributionControl: false
})

export default class Map extends React.Component<Props, {}> {
  public render() {
    const { data } = this.props
    return (
      <MapBox
        style="mapbox://styles/mapbox/light-v9"
        className={styles.MapBox}
        zoom={[1.2]}
        center={[0, 30]}
      >
        <Layer
          type="symbol"
          layout={{
            'text-field': 'Sia Active Hosts',
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-size': 18,
            'text-transform': 'uppercase',
            'text-letter-spacing': 0.05
          }}
          paint={{
            'text-color': '#7f8c8d'
          }}
          id="asdf"
        >
          <Feature coordinates={[-485, 65]} />
        </Layer>
        <GeoJSONLayer
          data={data ? data : geojson}
          circlePaint={{
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': 5,
            // color circles by ethnicity, using data-driven styles
            'circle-color': '#20EE82',
            'circle-opacity': 0.55
          }}
        />
      </MapBox>
    )
  }
}
