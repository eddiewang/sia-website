import * as React from 'react'
import axios from 'axios'
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

interface State {
  sia: number
  siaui: number
}

@inject('main')
@observer
class Download extends React.Component<{}, State> {
  public state = {
    sia: 10000,
    siaui: 600000
  }
  public componentDidMount() {
    axios
      .get('/api/downloadstats')
      .then(({ data }) => {
        this.setState({
          sia: data.sia,
          siaui: data.siaui
        })
      })
      .catch(err => {
        console.warn('Error: ', err)
      })
  }
  public render() {
    const { sia, siaui } = this.state
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
                content="Download version 1.3.7 of Sia-UI with a Graphical User Interface. Built for users who prefer to use a GUI over command line."
                linkTitle="Guide to Getting Started with Sia"
                tag={siaui}
                linkTo="http://siasetup.info/"
                links={[
                  {
                    title: 'Windows',
                    to: 'https://sia.tech/static/releases/Sia-UI-v1.3.7-win32-x64.zip'
                  },
                  {
                    title: 'macOS',
                    to: 'https://sia.tech/static/releases/Sia-UI-v1.3.7-osx-x64.zip'
                  },
                  {
                    title: 'Linux',
                    to: 'https://sia.tech/static/releases/Sia-UI-v1.3.7-linux-x64.zip'
                  }
                ]}
              />
              <LinkCard
                icon="sia"
                title="Sia Daemon"
                content="Download version 1.3.7 of Sia Daemon for use with your preferred CLI. Built for technical users comfortable with command line."
                linkTitle="Documentation for Developers"
                linkTo="https://gitlab.com/NebulousLabs/Sia/tree/master/doc"
                tag={sia}
                links={[
                  {
                    title: 'Windows',
                    to: 'https://sia.tech/static/releases/Sia-v1.3.7-windows-amd64.zip'
                  },
                  {
                    title: 'macOS',
                    to: 'https://sia.tech/static/releases/Sia-v1.3.7-darwin-amd64.zip'
                  },
                  {
                    title: 'Linux',
                    to: 'https://sia.tech/static/releases/Sia-v1.3.7-linux-amd64.zip'
                  }
                ]}
              />
            </div>
            <div className={styles.PubKeyWrap}>
              <div className={styles.PubKey}>
                As a reminder, all release binaries are signed. You can manually verify the
                signatures with the command:
                <br />
                <br />
                <pre>openssl dgst -sha256 -verify sia.pem -signature siad.sig siad</pre>
                <br />
                You can download the key{' '}
                <strong>
                  <a href="/static/releases/sia.pem">here</a>
                </strong>.
              </div>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Mining Pools</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard
                darkTitle
                icon="third"
                title="Luxor"
                content="Mining pool for Siacoin that donates a portion of profits to the Sia Core team"
                linkTitle="Setup Guide"
                linkTo="https://mining.luxor.tech/sia"
                links={[
                  {
                    title: 'mining.luxor.tech',
                    to: 'https://mining.luxor.tech/sia'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="SiaMining"
                content="The first and largest mining pool for Siacoin"
                linkTitle="Setup Guide"
                linkTo="https://siamining.com/help"
                links={[
                  {
                    title: 'siamining.com',
                    to: 'https://siamining.com/'
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
                title="SiaHub"
                content="Sia hosting stats, blockchain download, and explorer"
                links={[
                  {
                    title: 'siahub.info >',
                    to: 'https://siahub.info/'
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
                    to: 'https://obelisk.tech'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="PixelDrain"
                content="File sharing site powered by Sia"
                links={[
                  {
                    title: 'sia.pixeldrain.com >',
                    to: 'https://sia.pixeldrain.com/'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Goobox"
                content="Use Sia with a no-hassle front end"
                links={[
                  {
                    title: 'goobox.io >',
                    to: 'https://goobox.io/'
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
              {/* 
              
              Commenting out the Minio card for now in case they decide to re-enable support for Sia.

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
              /> */}
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

export default Download
