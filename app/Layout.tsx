import * as React from 'react'
import Helmet from 'react-helmet'
import { withRouter } from 'react-router-dom'

//
// React Components
import CurrentSectionProvider from 'components/CurrentSectionProvider'
import PageHeader from 'components/PageHeader'
import PageNav from 'components/PageNav'
import PageFooter from 'components/PageFooter'

interface Props {
  location: Location
  children?: React.ReactNode
}

const PAGE_NAME = 'Your App'

class Layout extends React.Component<Props, any> {
  public render() {
    const { children, location } = this.props
    const navItems = [
      {
        name: 'Get Started',
        path: '#vision'
      }, {
        name: 'About',
        path: '#team'
      }, {
        name: 'How it works',
        path: '#roadmap'
      }, {
        name: 'Roadmap',
        path: '#learn'
      }
    ]

    return (
      <CurrentSectionProvider>
        <div className="AppFrame">
          <Helmet defaultTitle={PAGE_NAME} titleTemplate={`%s - ${PAGE_NAME}`} />
          <PageHeader>
            <PageNav basePath={''} items={navItems} activePath={location.pathname} />
          </PageHeader>
          {children}
          <PageFooter />
        </div>
      </CurrentSectionProvider>
    )
  }
}

export default withRouter(Layout)
