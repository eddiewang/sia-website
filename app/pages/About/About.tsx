import * as React from 'react'
import className from 'classnames'
import { inject, observer } from 'mobx-react'

import LayoutContainer from 'components/LayoutContainer'
import TypeHeading from 'components/TypeHeading'
import Section from 'components/Section'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Text from 'components/Text'
import Avatar from 'components/Avatar'
import BioCard, { UserDetails } from 'components/BioCard'
import QuoteBlock from 'components/QuoteBlock'
import Helmet from 'react-helmet'

import * as styles from './About.scss'
import Bios from './Bios'

import investorLogos from 'img/investor-logos.png'
import raptor from 'img/investor-raptor.png'
import fbs from 'img/investor-fbs.png'
import fsv from 'img/investor-fsv.png'
import inb from 'img/investor-inb.png'

import facebook from 'svg/social-facebook.svg'
import medium from 'svg/social-medium.svg'
import twitter from 'svg/social-twitter.svg'
import linkedin from 'svg/social-linkedin.svg'
import github from 'svg/social-github.svg'
import gitlab from 'svg/social-gitlab.svg'

@inject('main')
@observer
class About extends React.Component {
  public render() {
    const mappedBios = Bios.map(({ content, name, social, svg, role }: UserDetails, i: number) => {
      return <BioCard key={i} content={content} name={name} social={social} svg={svg} role={role} />
    })
    return (
      <div>
        <Helmet title="About" />
        <Section>
          <LayoutContainer classes={styles.Vision}>
            <div className={styles.VisionHeading}>
              <TypeHeading level={3} inline underlined>
                Vision
              </TypeHeading>
            </div>
            <div>
              <Text.Paragraph type="visionHeading">
                Sia is reinventing cloud storage. Our technology connects users who need file
                storage with hosts worldwide offering underutilized hard drive capacity. Blockchain
                technology secures their data and enables improved economics for users and hosts.
              </Text.Paragraph>
              <Text.Paragraph>
                The Sia blockchain allows this marketplace to run without an intermediary. Sia
                secures storage transactions with smart contracts, creating a more reliable and
                affordable offering when compared to traditional cloud providers. No one person or
                organization can censor or deny access to data—not miners, not developers, nor any
                government. We believe Sia’s distributed, decentralized storage technology is
                stronger, more secure, more efficient, and more equitable for the entire ecosystem.
              </Text.Paragraph>
              <Text.Paragraph>
                We believe that neither individuals nor institutions should be beholden to large
                corporations. Sia was created to promote and safeguard users’ freedoms. It’s our
                attempt to bring decentralized storage built on blockchain technology to the
                mainstream without sacrificing price or performance.
              </Text.Paragraph>
              <Text.Paragraph>
                Our long term goal is for Sia to become the backbone storage layer of the Internet.
              </Text.Paragraph>
              <Text.Paragraph>
                Nebulous, Inc. was established in 2014 and launched the Sia Storage Platform in
                2015. Based in Boston, Nebulous is funded by Raptor Group, First Star Ventures,
                Fenbushi Capital and INBlockchain.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={className(styles.Team, styles.Section)}>
            <TypeHeading level={3} inline underlined>
              Team
            </TypeHeading>
            <div className={styles.TeamCofounders}>
              {mappedBios}
              <div className={styles.JobCard}>
                <TypeHeading type="bioHeading" level={6}>
                  Join us.
                </TypeHeading>
                <Text type="bioText">
                  We're looking for talented & passionate individuals to join our team. Check out
                  our job postings{' '}
                  <Text.Link href="https://angel.co/siatechhq/jobs">here.</Text.Link>
                </Text>
              </div>
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={className(styles.Investors, styles.Section)}>
            <TypeHeading level={3} inline underlined>
              Investors
            </TypeHeading>
            <div className={styles.InvestorsQuotes}>
              <QuoteBlock />
            </div>
            <div className={styles.InvestorsLogos}>
              {/* <img src={investorLogos} /> */}
              <img src={raptor} />
              <img src={fsv} />
              <img src={fbs} />
              <img src={inb} />
            </div>
          </LayoutContainer>
        </Section>
        <Section type="skyLight">
          <LayoutContainer classes={styles.Contact}>
            <div>
              <TypeHeading type="contactHeading" underlined level={3} inline>
                Contact
              </TypeHeading>
            </div>
            <div className={styles.ContactDetails}>
              <Text type="contactHeader">Nebulous, Inc.</Text>
              <Text light>
                67 Batterymarch St., Floor 4<br />Boston, MA 02110 USA<br /> hello@sia.tech
              </Text>
            </div>
            <div className={styles.ContactSocial}>
              <Text medium>Follow Us</Text>
              <div className={styles.ContactSocialIcons}>
                <Icon href="https://blog.sia.tech/" src={medium.id} aspectRatio="xMinYMin" />
                <Icon
                  href="https://twitter.com/SiaTechHQ"
                  src={twitter.id}
                  aspectRatio="xMinYMin"
                />
                <Icon
                  href="https://gitlab.com/NebulousLabs"
                  src={gitlab.id}
                  aspectRatio="xMinYMin"
                />
                <Icon
                  href="https://www.facebook.com/SiaTechHQ/"
                  src={facebook.id}
                  aspectRatio="xMinYMin"
                />
                <Icon
                  href="https://www.linkedin.com/company/17901008/"
                  src={linkedin.id}
                  aspectRatio="xMinYMin"
                />
              </div>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default About
