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
  public componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }
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
      },
      {
        name: 'Resources',
        subitems: [
          {
            name: 'Knowledge',
            path: 'https://support.sia.tech/help_center'
          },
          {
            name: 'FAQ',
            path: 'https://sia.tech/faq/'
          },
          {
            name: 'Forum',
            path: 'https://forum.sia.tech/'
          },
          {
            name: 'Wiki',
            path: 'https://siawiki.tech/'
          },
          {
            name: 'Get Siacoin',
            path: 'https://siawiki.tech/'
          }
        ]
      },
      {
        name: 'Community',
        subitems: [
          {
            name: 'Blog',
            path: 'https://blog.sia.tech/'
          },
          {
            name: 'Discord',
            path: 'https://discordapp.com/invite/sia'
          },
          {
            name: 'Forum',
            path: 'https://forum.sia.tech/'
          },
          {
            name: 'Github',
            path: 'https://github.com/nebulouslabs'
          },
          {
            name: 'Twitter',
            path: 'https://twitter.com/siatechhq'
          }
        ]
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
