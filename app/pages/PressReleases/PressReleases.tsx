import * as React from 'react'
import * as styles from './PressReleases.scss'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

import LayoutContainer from 'components/LayoutContainer'
import TypeHeading from 'components/TypeHeading'
import Section from 'components/Section'
import Helmet from 'react-helmet'
import MediaCard from 'components/MediaCard'
import Text from 'components/Text'

@inject('main')
@observer
class PressReleases extends React.Component {
  public render() {
    return (
      <div>
        <Helmet title="Newsroom" />
        <Section>
          <LayoutContainer classes={styles.Intro}>
            <TypeHeading classes={styles.IntroHeading} level={6}>
              Newsroom
            </TypeHeading>
          </LayoutContainer>
        </Section>
        <Section>
          <LayoutContainer classes={styles.Learn}>
            <div className={styles.LearnBoxes}>
              <MediaCard customTitle="2019" href="/funding2019" type="pr" target="_self">
                Sia raises $3.25M seed round led by Bain Capital Ventures
              </MediaCard>
              <MediaCard customTitle="2017" href="/2017grant" type="pr" target="_self">
                Sia receives $400k grant from INBlockchain
              </MediaCard>
              <MediaCard customTitle="2016" href="/funding2016" type="pr" target="_self">
                Sia raises $750k seed round led by Procyon Ventures and Raptor Group
              </MediaCard>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default PressReleases
