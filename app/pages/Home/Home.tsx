import * as React from 'react'
import { inject, observer } from 'mobx-react'

import LayoutContainer from 'components/LayoutContainer'
import TypeHeading from 'components/TypeHeading'
import Section from 'components/Section'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Text from 'components/Text'
import Avatar from 'components/Avatar'

import SiaLogo from 'svg/sia-logo.svg'
import DavidAvatar from 'svg/avatar-david.svg'
import LukeAvatar from 'svg/avatar-luke.svg'
import ChrisAvatar from 'svg/avatar-chris.svg'
import ZachAvatar from 'svg/avatar-zach.svg'
import SteveAvatar from 'svg/avatar-steve.svg'

import avatarData from './team-data'

import * as styles from './Home.scss'

@inject('main')
@observer
class Home extends React.Component {
  public render() {
    return (
      <div>
        <Section>
          <LayoutContainer classes={styles.Hero}>
            {/* Hero right */}
            <div className={styles.HeroLogo}>
              <Icon
                src={SiaLogo.id}
                viewBox={SiaLogo.viewBox}
                aspectRatio="xMinYMin"
                accessibleLabel="Sia Logo"
                aria-hidden="true"
              />
            </div>
            {/* Hero left */}
            <div className={styles.HeroContent}>
              <TypeHeading level={1}>The token sale you've been waiting for</TypeHeading>
              <TypeHeading level={5}>
                Sia is offering 750 Siafunds from our wallet in this token sale, which will take
                place between 00/00/00 — 00/00/00.
              </TypeHeading>
              <Button type="hero">Invest</Button>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.TwoColumnDescription}>
            <div>
              <TypeHeading inline underlined level={2}>
                Siafund
              </TypeHeading>
            </div>
            <div>
              <Text>
                Siafunds offer an innovative method to fundraise cryptocurrency projects and provide
                a profit-sharing mechanism for investors. A Siafund is a tokenized dividend that
                automatically receives a percentage of all revenue on the Sia network. Thus,
                Siafunds only generate revenue if users pay for storage on the Sia network.
              </Text>
              <Text>
                It is distinct from Siacoin, a cryptocurrency that can be exchanged for space on
                Sia's decentralized storage network.
              </Text>
              <Text>
                The value of a Siafund is the net present value of the network's future value. This
                creates an incentive for the Sia team to focus on the long-term value of the storage
                network and builds a strong foundation for growth.
              </Text>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.TwoColumnDescription}>
            <div>
              <TypeHeading inline underlined level={2}>
                Vision
              </TypeHeading>
            </div>
            <div>
              <TypeHeading level={3}>
                Sia offers a new kind of cloud storage product. Our technology automatically
                connects users who need storage with hosts worldwide who rent unused space on their
                hard drives.
              </TypeHeading>
              <Text>
                The blockchain allows us to run this marketplace without an intermediary. We secure
                storage transactions with smart contracts which creates a more reliable and lower
                cost option than traditional cloud providers. Every entity that stores data is
                responsible for the liability they assume. No one organization can censor or deny
                access to data — not the miners, not the developers, not the government. Our
                distributed, decentralized storage is stronger, more secure, more efficient, and
                more equitable for all.
              </Text>
              <Text>
                Individuals and institutions should not be beholden to large corporations. We formed
                Sia to promote and safeguard users’ freedoms. Sia is our attempt to bring
                decentralized, blockchain technology to the mainstream, without sacrificing price or
                performance.
              </Text>
              <Text>
                Sia was established in 2014. Based in Boston, Sia is funded by First Star Ventures
                and Raptor Group.
              </Text>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer>
            <TypeHeading inline underlined level={2}>
              Team
            </TypeHeading>
            <Avatar profiles={avatarData} />
          </LayoutContainer>
        </Section>
        <Section bordered>
          <LayoutContainer classes={styles.Timeline}>
            <TypeHeading inline underlined level={2}>
              Roadmap
            </TypeHeading>
            <div className={styles.TimelineWrap}>
              <div className={styles.SingleTimeline}>
                <div className={styles.TimelineVisualWrap}>
                  <div className={styles.TimelineLine} />
                  <div className={styles.TimelineCircle} />
                </div>
                <div className={styles.TimelineContent}>
                  <TypeHeading lighter level={3}>
                    2014
                  </TypeHeading>
                  <TypeHeading lighter level={5}>
                    Nebulous, Inc. is founded to build Sia. Raises first capital.
                  </TypeHeading>
                </div>
              </div>
              <div className={styles.SingleTimeline}>
                <div className={styles.TimelineVisualWrap}>
                  <div className={styles.TimelineLine} />
                  <div className={styles.TimelineCircle} />
                </div>
                <div className={styles.TimelineContent}>
                  <TypeHeading lighter level={3}>
                    2014
                  </TypeHeading>
                  <TypeHeading lighter level={5}>
                    Nebulous, Inc. is founded to build Sia. Raises first capital.
                  </TypeHeading>
                </div>
              </div>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Home
