import * as React from 'react'
import classNames from 'classnames'
import TypeHeading from 'components/TypeHeading'
import Icon from 'components/Icon'
import Text from 'components/Text'
import Waypoint from 'react-waypoint'
import * as styles from './PitchRow.scss'
import PitchHome from 'svg/pitch-home.svg'

interface Props {
  title: string
  content: string
  src: any
}

class PitchRow extends React.Component<Props, {}> {
  public render() {
    const { title, content, src } = this.props
    const PitchRowClass = classNames(styles.PitchRow)
    return (
      <div className={PitchRowClass}>
        <div className={styles.PitchRowImage}>
          <Icon src={src.id} viewBox={src.viewBox} aspectRatio="xMinYMin" aria-hidden="true" />
        </div>
        <div>
          <TypeHeading level={6}>{title}</TypeHeading>
          <Text.Paragraph>{content}</Text.Paragraph>
        </div>
      </div>
    )
  }
}

export default PitchRow
