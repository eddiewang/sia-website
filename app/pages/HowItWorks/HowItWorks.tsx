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
import Globe from 'components/Globe'

import * as styles from './HowItWorks.scss'

@inject('main')
@observer
class HowItWorks extends React.Component {
  public render() {
    return (
      <div>
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
            <div className={styles.TutorialImage} />
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
            <div className={styles.TutorialImage} />
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
            <div className={styles.TutorialImage} />
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
            <div className={styles.TutorialImage} />
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
            <div className={styles.TutorialImage} />
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
            <div className={styles.TutorialImage} />
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
