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
import Timeline, { TimelineStory } from 'components/Timeline'

import * as styles from './Roadmap.scss'

@inject('main')
@observer
class Roadmap extends React.Component {
  public render() {
    const data: TimelineStory[] = [
      {
        year: 2014,
        content: "Nebulous, Inc. is founded to build Sia. Raises first capital."
      },
      {
        year: 2015,
        content: "Sia network is released in Beta and improved throughout the year."
      },
      {
        year: 2016,
        content: "Sia comes out of Beta and releases v1.0."
      },
      {
        year: 2017,
        content: "Sia gains significant speed, stability, scalability upgrades, and team growth."
      },
      {
        year: 2018,
        content: "Sia becomes production-ready for cold storage, begins to be used by companies, and introduces file sharing."
      },
      {
        year: 2019,
        content: "Sia starts to approach Amazon S3 speeds, moves to warmer storage, and introduces CDN features."
      },
      {
        year: 2020,
        content: "Sia becomes a true competitor to Amazon S3 and companies start to switch to Sia."
      }
    ]
    return (
      <div>
        <Section>
          <LayoutContainer>
            <Timeline data={data}/>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Roadmap
