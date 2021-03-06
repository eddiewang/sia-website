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
    'pk.eyJ1IjoiZWRkaWVsdXhvciIsImEiOiJjamR4NzV4eTgzbzlhMnFxcDhuZTc2MXNyIn0.GYFUp0T8Fgel_Dbxh59VYw',
  apiUrl: 'https://maps.eddiewang.me',
  interactive: true,
  scrollZoom: false,
  attributionControl: false
})

export default class Map extends React.Component<Props, {}> {
  public render() {
    const { data } = this.props
    return (
      <MapBox
        style="https://maps.eddiewang.me/styles/positron/style.json"
        className={styles.MapBox}
        zoom={[1.2]}
        center={[0, 30]}
      >
        <Layer
          type="symbol"
          layout={{
            'text-field': 'Sia Storage Providers',
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-size': 18,
            'text-transform': 'uppercase',
            'text-letter-spacing': 0.05
          }}
          paint={{
            'text-color': '#7f8c8d'
          }}
          id="storageProviders"
        >
          <Feature coordinates={[500, 67]} />
        </Layer>
        <GeoJSONLayer
          data={data ? data : geojson}
          circlePaint={{
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': 5,
            // color circles by ethnicity, using data-driven styles
            'circle-color': '#1ED660',
            'circle-opacity': 0.55
          }}
        />
      </MapBox>
    )
  }
}
