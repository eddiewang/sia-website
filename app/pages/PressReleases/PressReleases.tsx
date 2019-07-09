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
        <Helmet title="Technology" />
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
              <MediaCard customTitle="2017" href="/2017grant" type="blog">
                Sia receives $400k grant from INBlockchain for development of its cloud storage
                platform
              </MediaCard>
              <MediaCard type="blog" customTitle="2016" href="/funding2016">
                Sia raises $750k seed round to further blockchain-powered, distributed storage ...
              </MediaCard>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default PressReleases
