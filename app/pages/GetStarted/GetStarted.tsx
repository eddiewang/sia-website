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
                content="Download the latest version of Sia with a Graphical User Interface"
                linkTitle="Getting Started Guide"
                linkTo="https://github.com/NebulousLabs/Sia-UI"
                links={[
                  {
                    title: 'Windows',
                    to:
                      'https://github.com/NebulousLabs/Sia-UI/releases/download/v1.3.1/Sia-UI-v1.3.1-win32-x64.zip'
                  },
                  {
                    title: 'macOS',
                    to:
                      'https://github.com/NebulousLabs/Sia-UI/releases/download/v1.3.1/Sia-UI-v1.3.1-osx-x64.zip'
                  },
                  {
                    title: 'Linux',
                    to:
                      'https://github.com/NebulousLabs/Sia-UI/releases/download/v1.3.1/Sia-UI-v1.3.1-linux-x64.zip'
                  }
                ]}
              />
              <LinkCard
                icon="sia"
                title="Sia Daemon"
                content="Download the latest Sia Daemon for use with your CLI"
                linkTitle="Getting Started Guide"
                linkTo="https://github.com/NebulousLabs/Sia-UI"
                links={[
                  {
                    title: 'Windows',
                    to:
                      'https://github.com/NebulousLabs/Sia/releases/download/v1.3.1/Sia-v1.3.1-windows-amd64.zip'
                  },
                  {
                    title: 'macOS',
                    to:
                      'https://github.com/NebulousLabs/Sia/releases/download/v1.3.1/Sia-v1.3.1-darwin-amd64.zip'
                  },
                  {
                    title: 'Linux',
                    to:
                      'https://github.com/NebulousLabs/Sia/releases/download/v1.3.1/Sia-v1.3.1-linux-amd64.zip'
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
                content="The official GPU miner"
                linkTitle="Source Code"
                linkTo="https://github.com/NebulousLabs/Sia-GPU-Miner"
                links={[
                  {
                    title: 'Download',
                    to: 'https://github.com/NebulousLabs/Sia-GPU-Miner/releases/latest'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Alternate Miner"
                content="A GPU miner for Sia in Go"
                linkTitle="Source Code"
                linkTo="https://github.com/robvanmieghem/gominer"
                links={[
                  {
                    title: 'Download',
                    to: 'https://github.com/robvanmieghem/gominer/releases/latest'
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
                content="The official Sia Explorer"
                links={[
                  {
                    title: 'explore.sia.tech >',
                    to: 'https://explore.sia.tech/'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="SiaStats"
                content="Charts and metrics for the Sia network"
                links={[
                  {
                    title: 'siastats.info >',
                    to: 'https://siastats.info/'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="SiaHub"
                content="Sia network stats and other tools"
                links={[
                  {
                    title: 'siahub.info >',
                    to: 'https://siahub.info/'
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
                content="Building Sia-centric apps and services"
                links={[
                  {
                    title: 'luxor.tech >',
                    to: 'https://mining.luxor.tech/'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Minebox"
                content="Next generation NAS powered by Sia"
                links={[
                  {
                    title: 'minebox.io >',
                    to: 'https://minebox.io/'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Obelisk"
                content="The first ASIC miner for Siacoin"
                links={[
                  {
                    title: 'obelisk.tech >',
                    to: 'https://github.com/NebulousLabs/Sia-UI'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="SiaBerry"
                content="OS for using Sia on Raspberry Pi"
                links={[
                  {
                    title: 'forum.sia.tech >',
                    to:
                      'https://forum.sia.tech/topic/1652/introducing-siaberryos-a-linux-operating-system-for-using-siacoin-on-raspberry-pi-3'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="SiaDrive"
                content="Mount Sia as a drive on your desktop"
                links={[
                  {
                    title: 'bitbucket.org >',
                    to: 'https://bitbucket.org/siaextensions/siadrive/overview'
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
                content="Automated backup software with friendly UI"
                links={[
                  {
                    title: 'Link >',
                    to:
                      'https://blog.sia.tech/introducing-full-computer-backup-with-sia-through-the-new-duplicati-integration-62dd17cbcfb7'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Minio"
                content="S3-compatible distributed object storage server"
                links={[
                  {
                    title: 'Link >',
                    to:
                      'https://blog.sia.tech/introducing-s3-style-file-sharing-for-sia-through-the-new-minio-integration-bb880af2366a'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Nextcloud"
                content="Self-hosted Dropbox alternative"
                links={[
                  {
                    title: 'Link >',
                    to:
                      'https://blog.sia.tech/using-sia-as-a-storage-back-end-for-nextcloud-90eab037959d'
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
