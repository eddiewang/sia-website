import * as React from 'react'
import { inject, observer } from 'mobx-react'

import LayoutContainer from 'components/LayoutContainer'
import TypeHeading from 'components/TypeHeading'
import Section from 'components/Section'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Text from 'components/Text'
import Avatar from 'components/Avatar'
// import Globe from 'components/Globe'
import Map from 'components/Map'
import MediaCard from 'components/MediaCard'
import Input from 'components/Input'

import SiaLogo from 'svg/sia-logo.svg'
import DavidAvatar from 'svg/avatar-david.svg'
import LukeAvatar from 'svg/avatar-luke.svg'
import ChrisAvatar from 'svg/avatar-chris.svg'
import ZachAvatar from 'svg/avatar-zach.svg'
import SteveAvatar from 'svg/avatar-steve.svg'

import DevCommits from 'svg/dev-commits.svg'
import DevReleases from 'svg/dev-releases.svg'
import DevForks from 'svg/dev-forks.svg'
import DevContributors from 'svg/dev-contributors.svg'

import avatarData from './team-data'

import * as styles from './Home.scss'

interface State {
  newsletterEmail: string
}

@inject('main')
@observer
class Home extends React.Component<{}, State> {
  public state: State = {
    newsletterEmail: ''
  }

  public handleCTA = (e): void => {
    this.setState({
      newsletterEmail: e.target.value
    })
  }
  public render() {
    return (
      <div>
        <Section>
          <LayoutContainer classes={styles.Hero}>
            <div className={styles.HeroContent}>
              <TypeHeading level={2}>Cloud storage is about to change. Are you ready?</TypeHeading>
              <Text.Paragraph>
                Sia is the first peer-to-peer, decentralized storage platform secured by blockchain.
                We leverage unused hard drive space to create a storage marketplace that is more
                reliable and lower cost than traditional cloud providers.
              </Text.Paragraph>
              <Button type="largeCTA">Download</Button>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer>
            <div className={styles.Globe}>
              <Map />
            </div>
            <div className={styles.Stats}>
              <div>
                <TypeHeading level={4} type="stat">
                  3.5PB
                </TypeHeading>
                <Text type="stat">Storage Capacity</Text>
              </div>
              <div>
                <TypeHeading level={4} type="stat">
                  950
                </TypeHeading>
                <Text type="stat">Active Hosts</Text>
              </div>
              <div>
                <TypeHeading level={4} type="stat">
                  105TB
                </TypeHeading>
                <Text type="stat">Used Storage</Text>
              </div>
              <div>
                <TypeHeading level={4} type="stat">
                  $1B
                </TypeHeading>
                <Text type="stat">Market Cap</Text>
              </div>
            </div>
          </LayoutContainer>
        </Section>
        <Section classes={styles.Pitch}>
          <LayoutContainer>
            <div className={styles.PitchRow}>
              <div className={styles.PitchRowImage} />
              <div>
                <TypeHeading level={6}>Completely Private</TypeHeading>
                <Text.Paragraph>
                  Sia splits apart, encrypts, and distributes your files across a decentralized
                  network. Since you hold the keys, you own your data. No outside company can access
                  or control your files, unlike traditional cloud storage providers.
                </Text.Paragraph>
              </div>
            </div>
            <div className={styles.PitchRow}>
              <div className={styles.PitchRowImage} />
              <div>
                <TypeHeading level={6}>Far More Affordable</TypeHeading>
                <Text.Paragraph>
                  Sia's decentralized cloud is on average 10x less expensive than current cloud
                  storage providers. Storing 1TB on Sia costs about $2 per month, compared with $23
                  on Amazon S3.
                </Text.Paragraph>
              </div>
            </div>
            <div className={styles.PitchRow}>
              <div className={styles.PitchRowImage} />
              <div>
                <TypeHeading level={6}>Highly Redundant</TypeHeading>
                <Text.Paragraph>
                  Sia stores tiny pieces of your files on dozens of nodes across the globe. This
                  eliminates any single point of failure and ensures highest possible uptime, on par
                  with other cloud storage providers.
                </Text.Paragraph>
              </div>
            </div>
            <div className={styles.PitchRow}>
              <div className={styles.PitchRowImage} />
              <div>
                <TypeHeading level={6}>Open source</TypeHeading>
                <Text.Paragraph>
                  Sia is completely open source. Over a dozen individuals have contributed to Sia's
                  software, and there is an active community building innovative applications on top
                  of the Sia API.
                </Text.Paragraph>
              </div>
            </div>
            <div className={styles.PitchRow}>
              <div className={styles.PitchRowImage} />
              <div>
                <TypeHeading level={6}>Blockchain Marketplace</TypeHeading>
                <Text.Paragraph>
                  Using the Sia blockchain, Sia creates a decentralized storage marketplace in which
                  hosts compete for your business – this leads to the lowest possible prices.
                  Renters pay using Siacoin, which can also be mined and traded.
                </Text.Paragraph>
              </div>
            </div>
          </LayoutContainer>
        </Section>
        <Section type="skyLight">
          <LayoutContainer classes={styles.Newsletter}>
            <TypeHeading level={6}>Sign up for announcements</TypeHeading>
            <div className={styles.NewsletterCTA}>
              <Input
                value={this.state.newsletterEmail}
                onChange={this.handleCTA}
                placeholder="Your email"
              />
              <Button classes={styles.NewsletterButton} type="largeCTA">
                Submit
              </Button>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.Developer}>
            <div className={styles.DeveloperStatBlock}>
              <Icon
                src={DevCommits.id}
                viewBox={DevCommits.viewBox}
                aspectRatio="xMinYMin"
                accessibleLabel="Developer Commits"
                aria-hidden="true"
                classes={styles.DeveloperIcon}
              />
              <TypeHeading type="developerStat" level={1}>
                7,926
              </TypeHeading>
              <TypeHeading type="developerStatSubheading" level={6}>
                Commits
              </TypeHeading>
            </div>

            <div className={styles.DeveloperStatBlock}>
              <Icon
                src={DevForks.id}
                viewBox={DevForks.viewBox}
                aspectRatio="xMinYMin"
                accessibleLabel="Developer Forks"
                aria-hidden="true"
                classes={styles.DeveloperIcon}
              />
              <TypeHeading type="developerStat" level={1}>
                244
              </TypeHeading>
              <TypeHeading type="developerStatSubheading" level={6}>
                Forks
              </TypeHeading>
            </div>
            <div className={styles.DeveloperStatBlock}>
              <Icon
                src={DevReleases.id}
                viewBox={DevReleases.viewBox}
                aspectRatio="xMinYMin"
                accessibleLabel="Developer Releases"
                aria-hidden="true"
                classes={styles.DeveloperIcon}
              />
              <TypeHeading type="developerStat" level={1}>
                40
              </TypeHeading>
              <TypeHeading type="developerStatSubheading" level={6}>
                Releases
              </TypeHeading>
            </div>
            <div className={styles.DeveloperStatBlock}>
              <Icon
                src={DevContributors.id}
                viewBox={DevContributors.viewBox}
                aspectRatio="xMinYMin"
                accessibleLabel="Developer Contributors"
                aria-hidden="true"
                classes={styles.DeveloperIcon}
              />
              <TypeHeading type="developerStat" level={1}>
                40
              </TypeHeading>
              <TypeHeading type="developerStatSubheading" level={6}>
                Contributors
              </TypeHeading>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.Learn}>
            <TypeHeading underlined inline level={4}>
              Learn
            </TypeHeading>
            <div className={styles.LearnBoxes}>
              <MediaCard type="video">
                Here’s a quick-start video on how to download and install Sia.
              </MediaCard>
              <MediaCard type="talks">
                Watch David Vorick talk about the business models behind tokens.
              </MediaCard>
              <MediaCard type="documentation">
                This guide will walk you through uploading a file to Sia using the API.
              </MediaCard>
            </div>
            <div className={styles.LearnMore}>
              <Text type="mediaCardText">Learn More</Text>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Home
