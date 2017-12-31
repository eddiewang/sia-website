import * as React from 'react'
import { inject, observer } from 'mobx-react'

import LayoutContainer from 'components/LayoutContainer'
import TypeHeading from 'components/TypeHeading'
import Section from 'components/Section'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Text from 'components/Text'
import Avatar from 'components/Avatar'
import Globe from 'components/Globe'

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
              <TypeHeading level={2}>Cloud storage is about to change. Are you ready?</TypeHeading>
              <Text>
                Sia is the first peer-to-peer, decentralized storage platform secured by blockchain.
                We leverage unused hard drive space to create a storage marketplace that is more
                reliable and lower cost than traditional cloud providers.
              </Text>
              <Button type="hero">Download</Button>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer>
            <div>
              <Globe />
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
      </div>
    )
  }
}

export default Home
