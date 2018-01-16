import * as React from 'react'
import { inject, observer } from 'mobx-react'

import LayoutContainer from 'components/LayoutContainer'
import TypeHeading from 'components/TypeHeading'
import Section from 'components/Section'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Text from 'components/Text'
import Avatar from 'components/Avatar'
import LinkCard from 'components/LinkCard'
import Helmet from 'react-helmet'

import * as styles from './GetStarted.scss'

@inject('main')
@observer
class GetStarted extends React.Component {
  public render() {
    return (
      <div className={styles.GetStarted}>
        <Helmet title="Get Started" />
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Core Software</TypeHeading>
            <div className={styles.Core}>
              <LinkCard
                icon="sia"
                title="Sia UI"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                linkTitle="Getting Started Guide"
                linkTo="https://github.com/NebulousLabs/Sia-UI"
                links={[
                  {
                    title: 'Windows',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  },
                  {
                    title: 'macOS',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  },
                  {
                    title: 'Linux',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                icon="sia"
                title="Sia Daemon"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                linkTitle="Getting Started Guide"
                linkTo="https://github.com/NebulousLabs/Sia-UI"
                links={[
                  {
                    title: 'Windows',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  },
                  {
                    title: 'macOS',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  },
                  {
                    title: 'Linux',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Mining</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard
                darkTitle
                icon="sia"
                title="Miner"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                linkTitle="Source Code"
                linkTo="https://github.com/NebulousLabs/Sia-UI"
                links={[
                  {
                    title: 'Download',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Alternate Miner"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                linkTitle="Source Code"
                linkTo="https://github.com/NebulousLabs/Sia-UI"
                links={[
                  {
                    title: 'Download',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Network Stats</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard
                icon="sia"
                darkTitle
                title="Explorer"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'explore.sia.tech >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="SiaStats"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'siastats.info >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="SiaHub"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'siahub.info >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Built on Sia</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard
                darkTitle
                icon="third"
                title="Luxor"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'Link >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Minebox"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'Link >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Obelisk"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'Link >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="SiaBerry"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'Link >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="SiaDrive"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'Link >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Integrations (Beta)</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard
                darkTitle
                icon="third"
                title="Duplicati"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'Link >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Minio"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'Link >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Nextcloud"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'Link >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default GetStarted
