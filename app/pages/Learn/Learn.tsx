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
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="blog">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="documentation">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="talks">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
            </div>
          </LayoutContainer>
        </Section>

        <Section>
          <LayoutContainer>
            <TypeHeading level={6}>Learn about Cryptocurrency</TypeHeading>
            <div className={styles.MediaGrid}>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
            </div>
          </LayoutContainer>
        </Section>

        <Section>
          <LayoutContainer>
            <TypeHeading level={6}>Learn about Cloud Storage</TypeHeading>
            <div className={styles.MediaGrid}>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Learn
