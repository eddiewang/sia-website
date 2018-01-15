import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Spinner from 'components/Spinner'
// import PageShell from './PageShell'
import AnimatedSwitch from './AnimatedSwitch'
import TransitionGroup from 'react-transition-group/TransitionGroup'

import Layout from './Layout'
import Home from 'pages/Home'

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children)
  return childrenArray[0] || null
}

const pageRoutes = ({ location }) => {
  return (
    <TransitionGroup component={firstChild}>
      <AnimatedSwitch key={location.key} location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/get-started" component={getComponent('GetStarted')} />
        <Route exact path="/about" component={getComponent('About')} />
        <Route exact path="/technology" component={getComponent('HowItWorks')} />
        <Route exact path="/learn" component={getComponent('Learn')} />
        <Route exact path="/roadmap" component={getComponent('Roadmap')} />
      </AnimatedSwitch>
    </TransitionGroup>
  )
}

export default class Routes extends React.Component {
  public render() {
    return (
      <Layout>
        <Route render={pageRoutes} />
      </Layout>
    )
  }
}

function getComponent(page) {
  return Loadable({
    loader: () => System.import(`pages/${page}`),
    loading() {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%'
          }}
        >
          <Spinner green />
        </div>
      )
    }
  })
}
