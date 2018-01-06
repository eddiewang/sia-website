import React from 'react'
import Link from './Link'
import Paragraph from './Paragraph'
import { variationName } from 'utilities/styles'
import * as classNames from 'classnames'
import * as styles from './Text.scss'

interface Props {
  children?: React.ReactNode
  inverse?: boolean
  type?: string
  light?: boolean
  medium?: boolean
  bold?: boolean
}

class Text extends React.PureComponent<Props, {}> {
  public static Link = Link
  public static Paragraph = Paragraph

  public render() {
    const { children, inverse, type, light, medium, bold } = this.props
    const textClass = classNames(
      styles.Text,
      inverse && styles[variationName('is', 'inverse')],
      light && styles[variationName('is', 'light')],
      medium && styles[variationName('is', 'medium')],
      bold && styles[variationName('is', 'bold')],
      type && styles[variationName('type', type)]
    )
    return (
      <span className={textClass}>{children}</span>
    )
  }
}

export default Text
