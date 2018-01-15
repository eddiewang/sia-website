import * as React from 'react'
import { inject, observer } from 'mobx-react'
import jsonp from 'jsonp'

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
import PitchRow from 'components/PitchRow'

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

import PitchHome from 'svg/pitch-home.svg'
import PitchAffordable from 'svg/pitch-affordable.svg'
import PitchRedundant from 'svg/pitch-redundant.svg'
import PitchOpenSource from 'svg/pitch-open.svg'
import PitchMarketplace from 'svg/pitch-marketplace.svg'

// import Hero from 'svg/hero.svg'
import HeroGif from 'img/hero.gif'

import avatarData from './team-data'

import * as styles from './Home.scss'

interface State {
  newsletterEmail: string
  newsletterStatus: null | 'error' | 'sending' | 'success'
  newsletterMessage: null | string
}

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

@inject('main')
@observer
class Home extends React.Component<{}, State> {
  public state: State = {
    newsletterEmail: '',
    newsletterStatus: null,
    newsletterMessage: null
  }

  public handleCTA = (e): void => {
    this.setState({
      newsletterEmail: e.target.value
    })
  }
  public submitEmail = e => {
    e.preventDefault()
    const { newsletterEmail } = this.state
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
    this.setState(
      {
        newsletterStatus: 'sending',
        newsletterMessage: null
      },
      () =>
        jsonp(
          url,
          {
            param: 'c'
          },
          (err, data) => {
            if (err) {
              this.setState({
                newsletterStatus: 'error',
                newsletterMessage: err
              })
            } else if (data.result !== 'success') {
              this.setState({
                newsletterStatus: 'error',
                newsletterMessage: 'This email is already subscribed!'
              })
            } else {
              this.setState({
                newsletterStatus: 'success',
                newsletterMessage: data.msg
              })
            }
          }
        )
    )
  }
  public render() {
    const { newsletterStatus } = this.state
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
              <Button.Link to="/get-started" type="largeCTA">
                Download
              </Button.Link>
            </div>
            <div className={styles.HeroImage}>
              <img src={HeroGif} />
              {/* <Icon
                src={Hero.id}
                viewBox={Hero.viewBox}
                aspectRatio="xMinYMin"
                aria-hidden="true"
              /> */}
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
            <PitchRow
              title="Completely Private"
              content="Sia splits apart, encrypts, and distributes your files across a decentralized network. Since you hold the keys, you own your data. No outside company can access or control your files, unlike traditional cloud storage providers."
              src={PitchHome}
            />
            <PitchRow
              title="Far More Affordable"
              content="Sia's decentralized cloud is on average 10x less expensive than current cloud storage providers. Storing 1TB on Sia costs about $2 per month, compared with $23 on Amazon S3."
              src={PitchAffordable}
            />
            <PitchRow
              title="Highly Redundant"
              content="Sia stores tiny pieces of your files on dozens of nodes across the globe. This eliminates any single point of failure and ensures highest possible uptime, on par with other cloud storage providers."
              src={PitchRedundant}
            />
            <PitchRow
              title="Open source"
              content="Sia is completely open source. Over a dozen individuals have contributed to Sia's software, and there is an active community building innovative applications on top of the Sia API."
              src={PitchOpenSource}
            />
            <PitchRow
              title="Blockchain Marketplace"
              content="Using the Sia blockchain, Sia creates a decentralized storage marketplace in which hosts compete for your business – this leads to the lowest possible prices. Renters pay using Siacoin, which can also be mined and traded."
              src={PitchMarketplace}
            />
          </LayoutContainer>
        </Section>
        <Section type="skyLight">
          <LayoutContainer classes={styles.Newsletter}>
            <TypeHeading level={6}>Sign up for announcements</TypeHeading>
            <div className={styles.NewsletterCTA}>
              <Input
                error={this.state.newsletterStatus === 'error'}
                value={this.state.newsletterEmail}
                onChange={this.handleCTA}
                placeholder="Your email"
              />
              <Button
                loading={newsletterStatus === 'sending'}
                classes={styles.NewsletterButton}
                onClick={this.submitEmail}
                type="largeCTA"
              >
                Submit
              </Button>
              <div className={styles.NewsletterStatus}>
                <Text>{this.state.newsletterMessage}</Text>
              </div>
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
              <MediaCard
                type="blog"
                href="https://blog.sia.tech/sia-triannual-update-september-december-2017-8afdf9c10325"
              >
                Read our latest triannual Sia update for September - December 2017.
              </MediaCard>
              <MediaCard
                href="https://www.infoq.com/presentations/decentralized-storage"
                type="talks"
              >
                Watch David Vorick talk about the business models behind tokens.
              </MediaCard>
              <MediaCard
                href="https://blog.sia.tech/how-to-put-data-on-the-sia-network-784499a65b"
                type="documentation"
              >
                This guide will walk you through uploading a file to Sia using the API.
              </MediaCard>
            </div>
            <div className={styles.LearnMore}>
              <Text.Link to="/learn" type="mediaCardTextLink">
                Learn More
              </Text.Link>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Home
