import React from 'react'
import LayoutContainer from 'components/LayoutContainer'
import * as styles from './PageFooter.scss'
import { inject, observer } from 'mobx-react'
import Text from 'components/Text'
import Button from 'components/Button'
import Input from 'components/Input'
import jsonp from 'jsonp'

interface FooterLink {
  name: string
  url: string
}

interface SitemapItem {
  title: string
  links: FooterLink[]
}

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

@inject('main')
@observer
export default class PageFooter extends React.Component {
  public state = {
    newsletterStatus: null,
    newsletterMessage: null
  }
  public submitEmail = e => {
    e.preventDefault()
    const newsletterEmail = this.props.main.footerEmail
    if (!newsletterEmail || newsletterEmail.length < 5 || newsletterEmail.indexOf('@') === -1) {
      this.setState({
        newsletterStatus: 'error'
      })
      return
    }
    const url =
      getAjaxUrl(
        'https://tech.us11.list-manage.com/subscribe/post?u=5df238d9e852f9801b5f2c92e&amp;id=49533cf53d'
      ) + `&EMAIL=${encodeURIComponent(newsletterEmail)}`

    const { main } = this.props
    main.footerStatus = 'sending'
    main.footerMessage = null
    jsonp(
      url,
      {
        param: 'c'
      },
      (err, data) => {
        if (err) {
          ;(main.footerStatus = 'error'), (main.footerMessage = err)
        } else if (data.result !== 'success') {
          ;(main.footerStatus = 'error'), (main.footerMessage = 'This email is already subscribed!')
        } else {
          ;(main.footerStatus = 'success'), (main.footerMessage = data.msg)
        }
      }
    )
  }
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
            name: 'Get Started',
            url: '/get-started'
          }
        ]
      },
      {
        title: 'Resources',
        links: [
          {
            name: 'Jobs',
            url: 'https://sia.tech/jobs'
          },

          {
            name: 'Support',
            url: 'https://support.sia.tech/'
          },
          {
            name: 'Trello',
            url: 'https://trello.com/b/Io1dDyuI/sia-public-roadmap'
          },
          {
            name: 'Wiki',
            url: 'https://siawiki.tech/'
          },
          {
            name: 'Get Siacoin',
            url: '/get-siacoin'
          },
          {
            name: 'Whitepaper',
            url: 'https://sia.tech/sia.pdf'
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
            name: 'Gitlab',
            url: 'https://gitlab.com/NebulousLabs'
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
              <div className={styles.PageFooterInput}>
                <Input
                  type="footer"
                  placeholder="Your Email"
                  value={this.props.main.footerEmail}
                  onChange={this.handleEmail}
                />
              </div>
              <Button onClick={this.submitEmail} type="footer">
                Submit
              </Button>
              <div style={{ textAlign: 'center' }}>
                <Text type="footerMessage" inverse>
                  {this.props.main.footerMessage}
                </Text>
              </div>
            </div>
            <div>
              <Text type="footerTitle">Questions?</Text>
              <Text type="footerContact">We're here to help!</Text>
              <Button.Link href="http://support.sia.tech/" type="footer">
                Get Support
              </Button.Link>
            </div>
          </div>
        </LayoutContainer>
      </div>
    )
  }
  private handleEmail = e => {
    this.props.main.footerEmail = e.target.value
  }
  private openGroove = e => {
    if (window.groove) {
      window.groove.widget('open')
    }
  }
}
