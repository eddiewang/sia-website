import * as React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

interface Props {
  width?: number
  height?: number
}

const MapBox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZWRkaWV3YW5nIiwiYSI6ImNqY2EzenN3OTA4NTgyd3A1MWRydWZqYTAifQ.6Ni0LTAYS5vVnjSNduZawA'
})

export default class Map extends React.Component<Props, {}> {
  public render() {
    return (
      <MapBox
        style="mapbox://styles/mapbox/light-v9"
        containerStyle={{
          height: '500px',
          width: '100%'
        }}
        zoom={[1]}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </MapBox>
    )
  }
}
