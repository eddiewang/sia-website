import React from 'react'
import LayoutContainer from 'components/LayoutContainer'
import * as styles from './PageFooter.scss'
import { inject, observer } from 'mobx-react'
import Text from 'components/Text'
import Button from 'components/Button'
import Input from 'components/Input'

interface FooterLink {
  name: string
  url: string
}

interface SitemapItem {
  title: string
  links: FooterLink[]
}

@inject('main')
@observer
export default class PageFooter extends React.Component {
  public render() {
    const sitemapLinks: SitemapItem[] = [
      {
        title: 'What is Sia',
        links: [
          {
            name: 'Home',
            url: '/'
          },
          {
            name: 'About',
            url: '/about'
          },
          {
            name: 'Technology',
            url: '/technology'
          },
          {
            name: 'Learn',
            url: '/learn'
          },
          {
            name: 'Download',
            url: '/download'
          }
        ]
      },
      {
        title: 'Resources',
        links: [
          {
            name: 'Whitepaper',
            url: 'https://sia.tech/whitepaper.pdf'
          },
          {
            name: 'Support',
            url: 'https://support.sia.tech/help_center'
          },
          {
            name: 'Roadmap',
            url: 'https://trello.com/b/Io1dDyuI/sia-public-roadmap'
          },
          {
            name: 'Wiki',
            url: 'https://siawiki.tech/'
          },
          {
            name: 'Get Siacoin',
            url: '/get-siacoin'
          }
        ]
      },
      {
        title: 'Community',
        links: [
          {
            name: 'Blog',
            url: 'https://blog.sia.tech/'
          },
          {
            name: 'Discord',
            url: 'https://discordapp.com/invite/sia'
          },
          {
            name: 'Forum',
            url: 'https://forum.sia.tech/'
          },
          {
            name: 'Github',
            url: 'https://github.com/nebulouslabs'
          },
          {
            name: 'Twitter',
            url: 'https://twitter.com/siatechhq'
          }
        ]
      }
    ]

    const mappedFooter = sitemapLinks.map((sitemap: SitemapItem, i: number) => {
      return (
        <div key={i} className={styles.PageFooterSitemap}>
          <Text type="footerTitle">{sitemap.title}</Text>
          <ul>
            {sitemap.links.map((l: FooterLink, idx: number) => (
              <li key={idx}>
                <Text.Link type="footerText" href={l.url}>
                  {l.name}
                </Text.Link>
              </li>
            ))}
          </ul>
        </div>
      )
    })
    return (
      <div className={styles.PageFooter}>
        <LayoutContainer classes={styles.PageFooterLayout}>
          {mappedFooter}
          <div className={styles.PageFooterCTA}>
            <div>
              <Text type="footerTitle">Newsletter</Text>
              <Input
                type="footer"
                placeholder="Your Email"
                value={this.props.main.footerEmail}
                onChange={this.handleEmail}
              />
              <Button type="footer">Submit</Button>
            </div>
            <div>
              <Text type="footerTitle">Questions?</Text>
              <Text type="footerContact">Get in touch!</Text>
              <Button type="footer">Contact</Button>
            </div>
          </div>
        </LayoutContainer>
      </div>
    )
  }
  private handleEmail = e => {
    this.props.main.footerEmail = e.target.value
  }
}
