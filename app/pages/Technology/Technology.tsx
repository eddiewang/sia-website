import * as React from 'react'
import * as styles from './Technology.scss'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

import LayoutContainer from 'components/LayoutContainer'
import TypeHeading from 'components/TypeHeading'
import Section from 'components/Section'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Text from 'components/Text'
import Avatar from 'components/Avatar'
import Helmet from 'react-helmet'

import TechnologySplit from 'svg/technology-split.svg'
import TechnologyEncrypted from 'svg/technology-encrypted.svg'
import TechnologyPay from 'svg/technology-pay.svg'
import TechnologyProof from 'svg/technology-proof.svg'
import TechnologySmart from 'svg/technology-smart.svg'
import TechnologyTime from 'svg/technology-time.svg'

@inject('main')
@observer
class HowItWorks extends React.Component {
  public render() {
    return (
      <div>
        <Helmet title="Technology" />
        <Section>
          <LayoutContainer classes={styles.Intro}>
            <TypeHeading classes={styles.IntroHeading} level={6}>
              Sia combines a peer-to-peer network with blockchain technology to create the world's
              first decentralized storage platform.
            </TypeHeading>
            <TypeHeading classes={styles.IntroHeading} level={6}>
              Here's how Sia works.
            </TypeHeading>
          </LayoutContainer>
        </Section>
        <Section classes={styles.Tutorial}>
          <LayoutContainer classes={styles.TutorialLayout}>
            <div className={styles.TutorialImage}>
              <Icon
                src={TechnologySplit.id}
                viewBox={TechnologySplit.viewBox}
                aspectRatio="xMinYMin"
                aria-hidden="true"
              />
            </div>
            <div className={styles.TutorialContent}>
              <TypeHeading level={6}>Files Are Divided Prior To Upload</TypeHeading>
              <Text.Paragraph>
                The Sia software divides files into 30 segments before uploading, each targeted for
                distribution to hosts across the world. This distribution assures that no one host
                represents a single point of failure and reinforces overall network uptime and
                redundancy.
              </Text.Paragraph>
              <Text.Paragraph>
                File segments are created using a technology called{' '}
                <Text.Link
                  type="techLink"
                  href="https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction"
                >
                  Reed-Solomon erasure coding
                </Text.Link>, commonly used in CDs and DVDs. Erasure coding allows Sia to divide
                files in a redundant manner, where any 10 of 30 segments can fully recover a user's
                files.
              </Text.Paragraph>
              <Text.Paragraph>
                This means that if 20 out of 30 hosts go offline, a Sia user is still able to
                download her files.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
        <Section classes={styles.Tutorial}>
          <LayoutContainer classes={styles.TutorialLayout}>
            <div className={styles.TutorialImage}>
              <Icon
                src={TechnologyEncrypted.id}
                viewBox={TechnologyEncrypted.viewBox}
                aspectRatio="xMinYMin"
                aria-hidden="true"
              />
            </div>
            <div className={styles.TutorialContent}>
              <TypeHeading level={6}>Each File Segment Is Encrypted</TypeHeading>
              <Text.Paragraph>
                Before leaving a renters’ computer, each file segment is encrypted. This ensures
                that hosts only store encrypted segments of user data.
              </Text.Paragraph>
              <Text.Paragraph>
                This differs from traditional cloud storage providers like Amazon, who do not
                encrypt user data by default. Sia is more secure than existing solutions because
                hosts only store encrypted file segments, rather than whole files.
              </Text.Paragraph>
              <Text.Paragraph>
                Sia uses the{' '}
                <Text.Link type="techLink" href="https://en.wikipedia.org/wiki/Twofish">
                  Twofish
                </Text.Link>
                , an open source and secure encryption standard that was a finalist in the Advanced
                Encryption Standard (AES) contest.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
        <Section classes={styles.Tutorial}>
          <LayoutContainer classes={styles.TutorialLayout}>
            <div className={styles.TutorialImage}>
              <Icon
                src={TechnologySmart.id}
                viewBox={TechnologySmart.viewBox}
                aspectRatio="xMinYMin"
                aria-hidden="true"
              />
            </div>
            <div className={styles.TutorialContent}>
              <TypeHeading level={6}>Files Are Sent To Hosts Using Smart Contracts</TypeHeading>
              <Text.Paragraph>
                Using the Sia blockchain, renters form file contracts with hosts. These contracts
                set pricing, uptime commitments, and other aspects of the relationship between the
                renters and the hosts.
              </Text.Paragraph>
              <Text.Paragraph>
                File contracts are a type of{' '}
                <Text.Link type="techLink" href="https://en.wikipedia.org/wiki/Smart_contract">
                  smart contract
                </Text.Link>. The Sia blockchain is specifically designed to store two types of
                data: Siacoin transactions and file contracts.
              </Text.Paragraph>
              <Text.Paragraph>
                Renters typically form 50 file contracts with top hosts on the Sia network.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
        <Section classes={styles.Tutorial}>
          <LayoutContainer classes={styles.TutorialLayout}>
            <div className={styles.TutorialImage}>
              <Icon
                src={TechnologyPay.id}
                viewBox={TechnologyPay.viewBox}
                aspectRatio="xMinYMin"
                aria-hidden="true"
              />
            </div>
            <div className={styles.TutorialContent}>
              <TypeHeading level={6}>Renters and Hosts Pay With Siacoin</TypeHeading>
              <Text.Paragraph>
                Both renters and host use Siacoin, a unique cryptocurrency built on the Sia
                blockchain. Renters use Siacoin to buy storage capacity from hosts, while hosts
                deposit Siacoin into each file contract as collateral.
              </Text.Paragraph>
              <Text.Paragraph>
                Micropayments flow between renters and hosts using a technology called{' '}
                <Text.Link type="techLink" href="https://en.bitcoin.it/wiki/Payment_channels">
                  payment channels
                </Text.Link>, which is similar to Bitcoin's lightning network. Payments between
                renters and hosts occur off-chain, greatly increasing network efficiency and
                scalability.
              </Text.Paragraph>
              <Text.Paragraph>
                Since hosts pay collateral into every storage contract, they have a strong
                disincentive to go offline.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
        <Section classes={styles.Tutorial}>
          <LayoutContainer classes={styles.TutorialLayout}>
            <div className={styles.TutorialImage}>
              <Icon
                src={TechnologyTime.id}
                viewBox={TechnologyTime.viewBox}
                aspectRatio="xMinYMin"
                aria-hidden="true"
              />
            </div>
            <div className={styles.TutorialContent}>
              <TypeHeading level={6}>Contracts Renew Over Time</TypeHeading>
              <Text.Paragraph>
                Renters prepay for storage within file contracts, setting aside a fixed amount of
                Siacoin to be spent on storing and transferring data. File contracts typically last
                90 days.
              </Text.Paragraph>
              <Text.Paragraph>
                Sia automatically renews contracts when they are within a certain window of
                expiring. If contracts are not renewed, Sia returns any unused coins to the renter
                at the end of the contract period.
              </Text.Paragraph>
              <Text.Paragraph>
                As individual hosts go offline, Sia automatically moves renter data to new hosts in
                a process called file repair.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
        <Section classes={styles.Tutorial}>
          <LayoutContainer classes={styles.TutorialLayout}>
            <div className={styles.TutorialImage}>
              <Icon
                src={TechnologyProof.id}
                viewBox={TechnologyProof.viewBox}
                aspectRatio="xMinYMin"
                aria-hidden="true"
              />
            </div>
            <div className={styles.TutorialContent}>
              <TypeHeading level={6}>Hosts Submit Storage Proofs</TypeHeading>
              <Text.Paragraph>
                At the end of a file contract, the host must prove that she is storing the renter's
                data. This is called a storage proof. If the storage proof appears on the blockchain
                within a certain timeframe, the host is paid. If not, the host is penalized.
              </Text.Paragraph>
              <Text.Paragraph>
                Storage proofs are made possible by a technology called{' '}
                <Text.Link type="techLink" href="https://en.wikipedia.org/wiki/Merkle_tree">
                  Merkle trees
                </Text.Link>. Merkle trees make it possible to prove that a small segment of data is
                part of a larger file. The advantage of these proofs is that they are very small, no
                matter how large the file is. This is important because the proofs are stored
                permanently on the blockchain.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default HowItWorks
