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

import * as styles from './HowItWorks.scss'

@inject('main')
@observer
class Home extends React.Component {
  public render() {
    return (
      <div>
        <Section>
          <LayoutContainer>
          <h1>hi</h1>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Home
