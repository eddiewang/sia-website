import * as React from 'react'
import * as styles from './HowItWorks.scss'
import * as classNames from 'classnames'
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

import * as styles from './HowItWorks.scss'

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
              How Sia Leverages Blockchain Technology To Supercharge Distributed Systems
            </TypeHeading>
            <Text.Paragraph>
              End users (renters) and hosts (organizations making underutilized hard drive space
              available to the Sia Storage Platform network both install software which is available
              for download at no cost at{' '}
              <Text.Link type="techLink" to="download">
                sia.tech/download
              </Text.Link>
            </Text.Paragraph>
            <Text.Paragraph>Here’s what happens to files uploaded to Sia:</Text.Paragraph>
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
                Before a file is uploaded to Sia, our software divides it into many segments, each
                targeted for distribution across nodes around the world. This distribution assures
                that no one node represents a single point of failure and reinforces overall network
                uptime and redundancy.
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
              <TypeHeading level={6}>Every File Segment Is Encrypted</TypeHeading>
              <Text.Paragraph>
                Before leaving a renters’ computer, each file segment is encrypted using the Twofish
                algorithm, one of the industry’s most secure.
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
              <TypeHeading level={6}>
                File Segments Are Sent To Hosts Using Blockchain-powered Smart Contracts
              </TypeHeading>
              <Text.Paragraph>
                Files stored on the Sia Storage Network are governed by smart contracts built on the
                Sia blockchain. These contracts set pricing, uptime commitments, and other aspects
                of the relationship between the renter and host.
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
              <TypeHeading level={6}>Hosts and Renters Use Siacoin Cryptocurrency</TypeHeading>
              <Text.Paragraph>
                Both renters and host use Siacoins, a unique cryptocurrency built on the Sia
                blockchain. Renters use Siacoins to pay for capacity used, while hosts deposit
                Siacoins with each file contract as collateral. It’s one of the most practical uses
                of blockchain technology and cryptocurrency in use today.
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
              <TypeHeading level={6}>Contract Renewals Over Time</TypeHeading>
              <Text.Paragraph>
                Each contract sets aside a fixed amount of Siacoins to be spent on storing and
                transferring data over a fixed, predetermined period. The renter pays all the
                Siacoins in advance, but any unused coins are returned to them at the end of the
                contract period.
              </Text.Paragraph>
              <Text.Paragraph>
                Sia’s software automatically renews contracts when they are within a certain window
                of expiring, but it does so taking into account actual capacity stored to ensure
                cost efficiencies relative to initial contract estimates.
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
              <TypeHeading level={6}>Host Submits a Storage Proof</TypeHeading>
              <Text.Paragraph>
                Lorem ipsum dolor sit amet, ne vocent recteque vel. Vim brute fabulas an, quas lorem
                ne mea. Delectus atomorum rationibus est ex. Cu posidonium elaboraret voluptatibus
                mei.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default HowItWorks
