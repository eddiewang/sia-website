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

const PAGE_NAME = 'Sia'

class Layout extends React.Component<Props, any> {
  public render() {
    const { children, location } = this.props
    const navItems = [
      {
        name: 'About',
        path: 'about'
      },
      {
        name: 'Technology',
        path: 'technology'
      },
      {
        name: 'Learn',
        path: 'learn'
      },
      {
        name: 'Roadmap',
        path: 'roadmap'
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
