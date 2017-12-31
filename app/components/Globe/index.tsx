import React from 'react'
require('./encom-globe')

class Globe extends React.Component {
  public globe
  // public componentWillMount() {

  // }
  public render() {
    return <div ref={globe => this.globe = globe} id="globe" />
  }
}

export default Globe
