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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et.
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
              <TypeHeading level={6}>File is Split Up</TypeHeading>
              <Text.Paragraph>
                Lorem ipsum dolor sit amet, ne vocent recteque vel. Vim brute fabulas an, quas lorem
                ne mea. Delectus atomorum rationibus est ex. Cu posidonium elaboraret voluptatibus
                mei.
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
              <TypeHeading level={6}>Pieces are Encrypted</TypeHeading>
              <Text.Paragraph>
                Lorem ipsum dolor sit amet, ne vocent recteque vel. Vim brute fabulas an, quas lorem
                ne mea. Delectus atomorum rationibus est ex. Cu posidonium elaboraret voluptatibus
                mei.
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
              <TypeHeading level={6}>Sent to Hosts Using Blockchain Smart Contracts</TypeHeading>
              <Text.Paragraph>
                Lorem ipsum dolor sit amet, ne vocent recteque vel. Vim brute fabulas an, quas lorem
                ne mea. Delectus atomorum rationibus est ex. Cu posidonium elaboraret voluptatibus
                mei.
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
              <TypeHeading level={6}>Both Host and Renter Pay</TypeHeading>
              <Text.Paragraph>
                Lorem ipsum dolor sit amet, ne vocent recteque vel. Vim brute fabulas an, quas lorem
                ne mea. Delectus atomorum rationibus est ex. Cu posidonium elaboraret voluptatibus
                mei.
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
              <TypeHeading level={6}>Time Elapses</TypeHeading>
              <Text.Paragraph>
                Lorem ipsum dolor sit amet, ne vocent recteque vel. Vim brute fabulas an, quas lorem
                ne mea. Delectus atomorum rationibus est ex. Cu posidonium elaboraret voluptatibus
                mei.
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
