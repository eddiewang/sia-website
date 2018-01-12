import * as React from 'react'
import * as classNames from 'classnames'
import TypeHeading from 'components/TypeHeading'
import Text from 'components/Text'
import Waypoint from 'react-waypoint'
import * as styles from './PitchRow.scss'

interface Props {
  title: string
  content: string
}

class PitchRow extends React.Component<Props, {}> {
  public render() {
    const { title, content } = this.props
    const PitchRowClass = classNames(styles.PitchRow)
    return (
      <div className={PitchRowClass}>
        <div className={styles.PitchRowImage} />
        <div>
          <TypeHeading level={6}>{title}</TypeHeading>
          <Text.Paragraph>{content}</Text.Paragraph>
        </div>
      </div>
    )
  }
}

export default PitchRow
