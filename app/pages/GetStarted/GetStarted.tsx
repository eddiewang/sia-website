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
                content="Download version 1.4.1.2 of Sia-UI with a Graphical User Interface. Built for users who prefer to use a GUI over command line."
                linkTitle="Guide to Getting Started with Sia"
                tag={siaui}
                linkTo="http://support.sia.tech/category/2ybqa8fh1f-get-started"
                links={[
                  {
                    title: 'Windows',
                    to: 'https://sia.tech/releases/Sia-UI-v1.4.1.2.exe'
                  },
                  {
                    title: 'macOS',
                    to: 'https://sia.tech/releases/Sia-UI-v1.4.1.2.dmg'
                  },
                  {
                    title: 'Linux',
                    to: 'https://sia.tech/releases/Sia-UI-v1.4.1.2.AppImage'
                  }
                ]}
              />
              <LinkCard
                icon="sia"
                title="Sia Daemon"
                content="Download version 1.4.1.2 of Sia Daemon for use with your preferred CLI. Built for technical users comfortable with command line."
                linkTitle="Documentation for Developers"
                linkTo="https://gitlab.com/NebulousLabs/Sia/tree/master/doc"
                tag={sia}
                links={[
                  {
                    title: 'Windows',
                    to: 'https://sia.tech/releases/Sia-v1.4.1.2-windows-amd64.zip'
                  },
                  {
                    title: 'macOS',
                    to: 'https://sia.tech/releases/Sia-v1.4.1.2-darwin-amd64.zip'
                  },
                  {
                    title: 'Linux',
                    to: 'https://sia.tech/releases/Sia-v1.4.1.2-linux-amd64.zip'
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
                  <a href="https://sia.tech/releases/sia.pem">here</a>
                </strong>.
              </div>
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
                title="Sia Explorer"
                content="The official Sia explorer made by the Sia team"
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
                content="Charts, metrics, and explorer for the Sia network"
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
            <TypeHeading level={6}>Cloud Storage Apps</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard
                darkTitle
                icon="third"
                title="Filebase"
                content="S3-compatible object storage service that uses Sia on the backend"
                links={[
                  {
                    title: 'filebase.com >',
                    to: 'https://filebase.com'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Goobox"
                content="File sharing site and S3-compatible object storage service that uses Sia on the backend"
                links={[
                  {
                    title: 'goobox.io >',
                    to: 'https://goobox.io'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="PixelDrain"
                content="File sharing site that uses Sia on the backend; similar to MegaUpload"
                links={[
                  {
                    title: 'pixeldrain.com >',
                    to: 'https://pixeldrain.com/'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Sia-Cloud"
                content="Cloud storage and file sharing website that uses Sia on the backend"
                links={[
                  {
                    title: 'sia-cloud.tech >',
                    to: 'https://sia-cloud.tech/'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="ZeroBit"
                content="Cloud storage service for developers that provides an API to store files on Sia"
                links={[
                  {
                    title: 'zero-bit.io >',
                    to: 'https://zero-bit.io'
                  }
                ]}
              />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Desktop Apps</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard
                darkTitle
                icon="third"
                title="Decentralizer"
                content="Sia companion app that provides renters with more granular controls over hosts and contracts"
                links={[
                  {
                    title: 'keops.cc >',
                    to: 'https://keops.cc/decentralizer'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Repertory"
                content="FUSE-compatible app that allows users to mount Sia as a drive on their desktops; similar to Google Drive"
                links={[
                  {
                    title: 'bitbucket.org >',
                    to: 'https://bitbucket.org/blockstorage/repertory/'
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
                    title: 'siacentral.com >',
                    to: 'https://siacentral.com/'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Siasync"
                content="Lightweight app that monitors a folder and syncs its contents to the Sia network; similar to Dropbox"
                links={[
                  {
                    title: 'github.com >',
                    to: 'https://github.com/tbenz9/siasync'
                  }
                ]}
              />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Beta Integrations</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard
                darkTitle
                icon="third"
                title="Duplicati"
                content="Automated full-computer backup software with friendly UI"
                links={[
                  {
                    title: 'Tutorial >',
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
                content="S3-compatible, open source, distributed object storage server"
                links={[
                  {
                    title: 'Tutorial >',
                    to:
                      'https://blog.sia.tech/introducing-s3-style-file-sharing-for-sia-through-the-new-minio-integration-bb880af2366a'
                  }
                ]}
              /> */}
              <LinkCard
                darkTitle
                icon="third"
                title="Nextcloud"
                content="Self-hosted Dropbox / Google Drive alternative"
                links={[
                  {
                    title: 'Tutorial >',
                    to:
                      'https://blog.sia.tech/using-sia-as-a-storage-back-end-for-nextcloud-90eab037959d'
                  }
                ]}
              />
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
      </div>
    )
  }
}

export default Download
