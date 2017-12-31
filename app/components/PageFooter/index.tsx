import React from 'react'
import LayoutContainer from 'components/LayoutContainer'
import * as styles from './PageFooter.scss'
import Text from 'components/Text'

interface FooterLink {
  name: string;
  url: string;
}

interface SitemapItem {
  title: string;
  links: FooterLink[]
}

export default class PageFooter extends React.PureComponent {
  public render() {
    const sitemapLinks: SitemapItem[] = [
      {
        title: "What is Sia",
        links: [{
          name: "Getting Started",
          url: "/getting-started"
        }, {
          name: "About",
          url: "/about"
        }, {
          name: "FAQ",
          url: "/faq"
        }, {
          name: "Download",
          url: '/download'
        }]
      },
      {
        title: "More about Sia",
        links: [{
          name: "Get Siacoin",
          url: "/getting-siacoin"
        }, {
          name: "Roadmap",
          url: "/roadmap"
        }, {
          name: "Github-UI",
          url: "#"
        }, {
          name: "Github",
          url: "#"
        }]
      }, {
        title: "Community",
        links: [{
          name: "Blog",
          url: "/blog"
        }, {
          name: "Discord",
          url: '#'
        }, {
          name: "Forum",
          url: '#'
        }, {
          name: "Twitter",
          url: '#'
        }]
      }
    ]

    const mappedFooter = sitemapLinks.map( (sitemap: SitemapItem, i: number) => {

      return (
        <div key={i} className={styles.PageFooterSitemap}>
          <Text type="footerTitle">{sitemap.title}</Text>
          <ul>
          {
            sitemap.links.map((l : FooterLink) => (
              <li><Text.Link type="footerText" to={l.url}>{l.name}</Text.Link></li>
            ))
          }
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
            </div>
            <div>
              <Text type="footerTitle">Questions?</Text>
            </div>
          </div>
        </LayoutContainer>
      </div>
    )
  }
}
