import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import Layout from './Layout'
import Home from 'pages/Home'

export default class Routes extends React.Component {
  public render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/get-started" component={getComponent('GetStarted')} />
          <Route exact path="/about" component={getComponent('About')} />
          <Route exact path="/how-it-works" component={getComponent('HowItWorks')} />
          <Route exact path="/learn" component={getComponent('Learn')} />
          <Route exact path="/roadmap" component={getComponent('Roadmap')} />
        </Switch>
      </Layout>
    )
  }
}

function getComponent(page) {
  return Loadable({
    loader: () => System.import(`pages/${page}`),
    loading() {
      return <div style={{ height: '100vh' }} />
    }
  })
}
