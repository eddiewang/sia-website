import * as React from 'react'
import * as styles from './Timeline.scss'
import * as classNames from 'classnames'

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
  public state = {
    year: 2017,
    day: 0
  }

  public componentDidMount() {
    const year = new Date().getFullYear()
    const now = new Date()
    const start = new Date(now.getFullYear(), 0, 0)
    const diff = (now as any) - (start as any)
    const oneDay = 1000 * 60 * 60 * 24
    const day = Math.floor(diff / oneDay)
    this.setState({
      year,
      day
    })
  }
  public render() {
    const { data } = this.props
    const { year, day } = this.state
    const beforeClass = classNames(styles.Before)
    const duringClass = classNames(styles.During)
    const futureClass = classNames(styles.Future)
    const mappedTimeline = data.map((d, i) => {
      let mapClass
      const lineLength = Math.ceil(120 / 365 * day / 10)
      if (d.year < year) {
        mapClass = beforeClass
      } else if (d.year === year) {
        mapClass = duringClass
      } else if (d.year > year) {
        mapClass = futureClass
      } else {
        console.warn('Invalid year supplied')
      }
      return (
        <li key={i} className={mapClass}>
          <div className={styles.RoadmapContent}>
            <TypeHeading level={6}>{d.year}</TypeHeading>
            <Text>{d.content}</Text>
          </div>
          <div data-length={lineLength} className={styles.RoadmapCircle} />
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
          <TypeHeading level={6}>
            Long term goal: Sia becomes the storage layer of the Internet
          </TypeHeading>
        </div>
      </div>
    )
  }
}

export default Timeline
