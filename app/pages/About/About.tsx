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
import BioCard, { UserDetails } from 'components/BioCard'

import * as styles from './About.scss'
import Bios from './Bios'

import investorLogos from 'img/investor-logos.png'


@inject('main')
@observer
class About extends React.Component {
  public render() {
    const mappedBios = Bios.map(({content, name, social, svg} : UserDetails, i: number)  => {
      return (
        <BioCard key={i} content={content} name={name} social={social} svg={svg} />
      )
    })
    return (
      <div>
        <Section>
          <LayoutContainer classes={styles.Vision}>
            <div>
              <TypeHeading level={3} inline underlined>
                Vision
              </TypeHeading>
            </div>
            <div>
              <Text type="visionHeading">
                Sia offers a new kind of cloud storage product. Our technology automatically
                connects users who need storage with hosts worldwide who rent unused space on their
                hard drives.
              </Text>
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
          <LayoutContainer classes={styles.Team}>
            <TypeHeading level={3} inline underlined>
              Team
            </TypeHeading>
            <div className={styles.TeamCofounders}>
              {mappedBios}
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.Investors}>
            <TypeHeading level={3} inline underlined>
              Investors
            </TypeHeading>
            <div className={styles.InvestorsLogos}>
              <img src={investorLogos} />
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default About
