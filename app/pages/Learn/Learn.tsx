import * as React from 'react'
import { inject, observer } from 'mobx-react'

import LayoutContainer from 'components/LayoutContainer'
import TypeHeading from 'components/TypeHeading'
import MediaCard from 'components/MediaCard'
import Section from 'components/Section'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Text from 'components/Text'
import Avatar from 'components/Avatar'
import Helmet from 'react-helmet'
import * as styles from './Learn.scss'

@inject('main')
@observer
class Learn extends React.Component {
  public render() {
    return (
      <div className={styles.LearnContainer}>
        <Helmet title="Learn" />
        <Section>
          <LayoutContainer>
            <TypeHeading level={6}>Learn about Sia</TypeHeading>
            <div className={styles.MediaGrid}>
              <MediaCard
                type="blog"
                href="https://blog.sia.tech/sia-triannual-update-september-december-2017-8afdf9c10325"
              >
                Read our latest Sia triannual update for September - December 2017.
              </MediaCard>
              <MediaCard type="video" href="https://youtu.be/9cEEG3WOemI">
                Watch a fun video from a community member explaining how Sia works.
              </MediaCard>
              <MediaCard
                type="documentation"
                href="https://blog.sia.tech/how-to-put-data-on-the-sia-network-784499a65b"
              >
                Learn how to upload data to the Sia network.
              </MediaCard>
              <MediaCard type="talks" href="https://youtu.be/cR8YL05nq4A">
                Watch CEO David Vorick explain Sia at MIT's 2016 Bitcoin Expo.
              </MediaCard>
              <MediaCard type="blog" href="https://blog.sia.tech/the-sia-ethos-48f72f1cf382">
                Read about the Sia Ethos on our blog.
              </MediaCard>
            </div>
          </LayoutContainer>
        </Section>

        <Section>
          <LayoutContainer>
            <TypeHeading level={6}>Learn about Cryptocurrency</TypeHeading>
            <div className={styles.MediaGrid}>
              <MediaCard type="link" href="https://bitcoin.org/en/developer-guide">
                Get a technical overview of Bitcoin and blockchains from the Bitcoin Developer
                Guide.
              </MediaCard>
              <MediaCard
                type="blog"
                href="https://blog.sia.tech/dont-write-your-own-smart-contracts-24e8fc9f71ec"
              >
                Read about why you should not write your own smart contracts.
              </MediaCard>
              <MediaCard
                type="blog"
                href="https://blog.sia.tech/choosing-asics-for-sia-b318505b5b51"
              >
                Learn about the importance of ASIC mining.
              </MediaCard>
              <MediaCard
                type="blog"
                href="https://blog.sia.tech/want-to-deflate-the-token-bubble-fix-the-market-cap-indicator-d50f7f1e1ec4"
              >
                Read about the issues with using market cap as a metric.
              </MediaCard>
              <MediaCard type="link" href="http://lopp.net/bitcoin.html">
                View a robust list of Bitcoin resources at Jameson Lopp's website.
              </MediaCard>
            </div>
          </LayoutContainer>
        </Section>

        <Section>
          <LayoutContainer>
            <TypeHeading level={6}>Learn about Cloud Storage</TypeHeading>
            <div className={styles.MediaGrid}>
              <MediaCard
                type="blog"
                href="https://blog.sia.tech/why-blockchains-are-the-future-of-cloud-storage-91f0b48cfce9"
              >
                Read about why blockchains are the future of cloud storage.
              </MediaCard>
              <MediaCard
                type="blog"
                href="https://blog.sia.tech/decentralization-could-have-saved-users-of-amazon-drive-7e363cb3214a"
              >
                Learn why decentralization could have saved the users of Amazon Drive.
              </MediaCard>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Learn
