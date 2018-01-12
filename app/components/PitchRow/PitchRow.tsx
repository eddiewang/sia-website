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
  public state = {
    visible: false,
    message: 'hi'
  }
  public appearIn = () => {
    console.log('hi')
    this.setState({
      message: 'entered'
    })
  }
  public render() {
    const { title, content } = this.props
    const { visible, message } = this.state
    const PitchRowClass = classNames(styles.PitchRow, visible && styles.isVisible)
    return (
      <Waypoint onEnter={this.appearIn}>
        <div className={PitchRowClass}>
          <div className={styles.PitchRowImage} />
          <div>
            <TypeHeading level={6}>{title}</TypeHeading>
            <Text.Paragraph>{content}</Text.Paragraph>
          </div>
        </div>
      </Waypoint>
    )
  }
}

export default PitchRow
