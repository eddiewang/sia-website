import React from 'react'
import Link from './Link'
import Tag from './Tag'
import Paragraph from './Paragraph'
import { variationName } from 'utilities/styles'
import classNames from 'classnames'
import * as styles from './Text.scss'

interface Props {
  children?: React.ReactNode
  inverse?: boolean
  type?: string
  light?: boolean
  medium?: boolean
  bold?: boolean
  ink?: boolean
}

class Text extends React.PureComponent<Props, {}> {
  public static Link = Link
  public static Paragraph = Paragraph
  public static Tag = Tag

  public render() {
    const { children, inverse, type, light, medium, bold, ink } = this.props
    const textClass = classNames(
      styles.Text,
      inverse && styles[variationName('is', 'inverse')],
      ink && styles[variationName('is', 'ink')],
      light && styles[variationName('is', 'light')],
      medium && styles[variationName('is', 'medium')],
      bold && styles[variationName('is', 'bold')],
      type && styles[variationName('type', type)]
    )
    return <span className={textClass}>{children}</span>
  }
}

export default Text
