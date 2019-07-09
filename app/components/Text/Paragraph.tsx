import React from 'react'
import Link from './Link'
import { variationName } from 'utilities/styles'
import classNames from 'classnames'
import * as styles from './Text.scss'

interface Props {
  children?: React.ReactNode
  inverse?: boolean
  type?: string
  bold?: boolean
}

class Paragraph extends React.PureComponent<Props, {}> {
  public render() {
    const { children, inverse, type, bold } = this.props
    const textClass = classNames(
      styles.Text,
      inverse && styles[variationName('is', 'inverse')],
      type && styles[variationName('type', type)],
      bold && styles[variationName('is', 'bold')]
    )
    return <p className={textClass}>{children}</p>
  }
}

export default Paragraph
