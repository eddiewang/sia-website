import * as React from 'react'
import * as styles from './Timeline.scss'

import Text from 'components/Text'
import TypeHeading from 'components/TypeHeading'

export interface TimelineStory {
  year: number
  content: string
}
interface Props {
  data: TimelineStory[]
}

class Timeline extends React.Component<Props, {}> {
  public render() {
    const { data } = this.props
    const mappedTimeline = data.map((d, i) => {
      return (
        <li key={i}>
          <div className={styles.RoadmapContent}>
            <TypeHeading level={6}>{d.year}</TypeHeading>
            <Text>{d.content}</Text>
          </div>
          <div className={styles.RoadmapCircle} />
        </li>
      )
    })
    return (
      <div className={styles.Timeline}>
        <ul className={styles.Roadmap}>
          {mappedTimeline}
          <li>
            <div className={styles.Last} />
          </li>
        </ul>
        <div className={styles.TimelineEnding}>
          <TypeHeading level={6}>Become the storage layer of <br/>The Internet</TypeHeading>
        </div>
      </div>
    )
  }
}

export default Timeline
