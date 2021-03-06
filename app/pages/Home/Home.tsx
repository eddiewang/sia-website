import * as React from 'react'
import { inject, observer } from 'mobx-react'
import jsonp from 'jsonp'
import axios from 'axios'
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl'

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
// @ts-ignore
// import HeroGif from 'img/hero-old.gif'
// import HeroStatic from 'img/hero-static.png'
import HeroSvg from 'svg/hero-logo.svg'

import avatarData from './team-data'

import * as styles from './Home.scss'

interface State {
  newsletterEmail: string
  newsletterStatus: null | 'error' | 'sending' | 'success'
  newsletterMessage: null | string
  marketCap: string
  usedStorage: string
  activeHosts: number
  storageCapacity: string
  mapData: any
  github: {
    commits: number
    forks: number
    releases: number
    contributors: number
  }
}

interface CoinMarketCapData {
  id: string
  name: string
  symbol: string
  rank: string
  price_usd: string
  price_btc: string
  '24_volume_usd': string
  market_cap_usd: string
  available_supply: string
  total_supply: string
  max_supply: string
  last_updated: string
}

interface ApiStats {
  timestamp: number
  activehosts: number
  totalstorage: number
  usedstorage: number
  usage: number
}

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

const messages = defineMessages({
  greeting: {
    id: 'app.home.greeting',
    description: 'Welcome hero text',
    defaultMessage: 'Decentralized storage for the post-cloud world.'
  }
})

@inject('main')
@observer
class Home extends React.Component<{ intl: any }, State> {
  public state: State = {
    newsletterEmail: '',
    newsletterStatus: null,
    newsletterMessage: null,
    marketCap: '0.5',
    usedStorage: '206',
    activeHosts: 895,
    storageCapacity: '2',
    mapData: null,
    github: {
      commits: 7000,
      forks: 244,
      releases: 30,
      contributors: 40
    }
  }

  public getMarketCap() {
    return axios.get('/api/marketcap')
  }

  public getStats() {
    return axios.get('/api/stats')
  }

  public getMap() {
    return axios.get('/api/hosts')
  }

  public getNetwork() {
    return axios.get('api/siahub/network')
  }

  public getGithub() {
    return axios.get('api/github')
  }

  public getSiastats() {
    return axios.get('api/siastats')
  }

  public getStorage() {
    return axios.get('api/siastats/storage')
  }

  public getHosts() {
    return axios.get('/api/siastats/host')
  }

  public componentDidMount() {
    axios
      .all([
        this.getMarketCap(),
        this.getNetwork(),
        this.getMap(),
        this.getGithub(),
        this.getSiastats(),
        this.getStorage(),
        this.getHosts()
      ])
      .then(
        axios.spread((marketcap, stats, hosts, github, siastats, storage, hostsOnline) => {
          const marketCap = parseInt(marketcap.data[0].market_cap_usd, 10)
          const inMillions = (marketCap / 1000000).toFixed(1)
          const { data } = stats
          const activeHosts = hostsOnline.data.hostsonline
          const totalStorage = storage.data.total
          const usedStorage = storage.data.used.toFixed(0)
          const storageCapacity = (data.totalstorage / 1e15).toFixed(0)

          const mapData = hosts.data
          const geoJsonFormatter = hostdata => {
            const geoJson = {
              type: 'FeatureCollection',
              features: [] as any[]
            }
            hostdata.forEach(h => {
              geoJson.features.push({
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [h.lon, h.lat]
                }
              })
            })
            return geoJson
          }
          const geoData = geoJsonFormatter(mapData)

          this.setState({
            marketCap: inMillions,
            usedStorage,
            activeHosts,
            storageCapacity,
            mapData: geoData,
            github: {
              commits: github.data.total_commits,
              contributors: github.data.total_contributors,
              forks: github.data.total_forks,
              releases: github.data.total_releases
            }
          })
        })
      )
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
    const { intl } = this.props
    return (
      <div>
        <Section>
          <LayoutContainer classes={styles.Hero}>
            <div className={styles.HeroContent}>
              <TypeHeading level={2}>{intl.formatMessage(messages.greeting)}</TypeHeading>
              <Text.Paragraph>
                Sia is the leading decentralized cloud storage platform. No signups, no servers, no
                trusted third parties. Sia leverages blockchain technology to create a data storage
                marketplace that is more robust and more affordable than traditional cloud storage
                providers.
              </Text.Paragraph>
              <Button.Link to="/get-started" type="largeCTA">
                Download Now
              </Button.Link>
            </div>
            <div className={styles.HeroImage}>
              <Icon src={HeroSvg.id} aspectRatio="xMinYMin" />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer>
            <div className={styles.Globe}>
              <Map data={this.state.mapData} />
              <p>
                Map provided by{' '}
                <a href="https://www.openstreetmap.org/copyright" target="_blank">
                  OpenStreetMap
                </a>
              </p>
            </div>
            <div className={styles.Stats}>
              <div>
                <TypeHeading level={4} type="stat">
                  {this.state.storageCapacity}PB
                </TypeHeading>
                <Text type="stat">Storage Capacity</Text>
              </div>
              <div>
                <TypeHeading level={4} type="stat">
                  {this.state.activeHosts}
                </TypeHeading>
                <Text type="stat">Storage Providers</Text>
              </div>
              <div>
                <TypeHeading level={4} type="stat">
                  {this.state.usedStorage}TB
                </TypeHeading>
                <Text type="stat">Used Storage</Text>
              </div>
              <div>
                <TypeHeading level={4} type="stat">
                  1.2M
                </TypeHeading>
                <Text type="stat">Downloads</Text>
              </div>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer>
            <PitchRow
              title="Completely Private"
              content="Sia encrypts and distributes your files across a decentralized network. You control your private encryption keys and you own your data. No outside company or third party can access or control your files, unlike traditional cloud storage providers."
              src={PitchHome}
            />
            <PitchRow
              title="Far More Affordable"
              content="On average, Sia's decentralized cloud storage costs 90% less than incumbent cloud storage providers. Storing 1TB of files on Sia costs about $1-2 per month, compared with $23 on Amazon S3."
              src={PitchAffordable}
            />
            <PitchRow
              title="Highly Redundant"
              content="Sia distributes and stores redundant file segments on nodes across the globe, eliminating any single point of failure and ensuring uptime that rivals traditional cloud storage providers."
              src={PitchRedundant}
            />
            <PitchRow
              title="Open Source"
              content="Sia’s software is completely open source, with contributions from leading software engineers and a thriving community of developers building innovative applications on the Sia API."
              src={PitchOpenSource}
            />
            <PitchRow
              title="Marketplace On Blockchain"
              content="Using the Sia blockchain, Sia creates a decentralized storage marketplace in which storage providers compete for your business, which leads to the lowest possible prices. Renters pay using Siacoin, which can also be mined and traded."
              src={PitchMarketplace}
            />
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
                {this.state.github.commits}
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
                {this.state.github.forks}
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
                {this.state.github.releases}
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
                {this.state.github.contributors}
              </TypeHeading>
              <TypeHeading type="developerStatSubheading" level={6}>
                Contributors
              </TypeHeading>
            </div>
          </LayoutContainer>
        </Section>
        <Section type="skyLight">
          <LayoutContainer classes={styles.Newsletter}>
            <TypeHeading level={6}>Sign up for announcements</TypeHeading>
            <div className={styles.NewsletterCTA}>
              <Input
                error={this.state.newsletterStatus === 'error'}
                success={this.state.newsletterStatus === 'success'}
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
          <LayoutContainer classes={styles.Learn}>
            <TypeHeading underlined inline level={4}>
              Learn
            </TypeHeading>
            <div className={styles.LearnBoxes}>
              <MediaCard type="blog" href="https://blog.sia.tech/the-sia-ethos-48f72f1cf382">
                <b>The Sia Ethos</b>
                <br />Learn about Sia's principles and values
              </MediaCard>
              <MediaCard
                href="https://support.sia.tech/article/dk91b0eibc-welcome-to-sia"
                type="documentation"
              >
                <b>Welcome to Sia</b>
                <br />Get up to speed with Sia basics; great for new users!
              </MediaCard>
              <MediaCard
                href="https://blog.sia.tech/guide-seed-based-file-recovery-on-sia-e11dcdf283ea"
                type="blog"
              >
                <b>Seed-Based File Recovery</b>
                <br />Learn how to backup and restore your files on Sia
              </MediaCard>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default injectIntl(Home)
