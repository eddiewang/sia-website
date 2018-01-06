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
import LinkCard from 'components/LinkCard'

import * as styles from './GetStarted.scss'

@inject('main')
@observer
class GetStarted extends React.Component {
  public render() {
    return (
      <div className={styles.GetStarted}>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Core Software</TypeHeading>
            <div className={styles.Core}>
              <LinkCard />
              <LinkCard />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Mining</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard />
              <LinkCard />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Network Stats</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard />
              <LinkCard />
              <LinkCard />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Built on Sia</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard />
              <LinkCard />
              <LinkCard />
              <LinkCard />
              <LinkCard />
              <LinkCard />
            </div>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.LinkSection}>
            <TypeHeading level={6}>Integrations (Beta)</TypeHeading>
            <div className={styles.Grid}>
              <LinkCard />
              <LinkCard />
              <LinkCard />
              <LinkCard />
              <LinkCard />
              <LinkCard />
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default GetStarted
