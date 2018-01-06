import * as React from 'react'
import * as styles from './HowItWorks.scss'
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
      </div>
    )
  }
}

export default HowItWorks
