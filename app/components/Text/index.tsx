import React from 'react'
import Link from './Link'
import { variationName } from 'utilities/styles'
import * as classNames from 'classnames'
import * as styles from './Text.scss'

interface Props {
  children?: React.ReactNode
  inverse?: boolean
  type?: string
}

class Text extends React.PureComponent<Props, {}> {
  public static Link = Link

  public render() {
    const { children, inverse, type } = this.props
    const textClass = classNames(
      styles.Text,
      inverse && styles[variationName('is', 'inverse')],
      type && styles[variationName('type', type)]
    )
    return (
      <p className={textClass}>{children}</p>
    )
  }
}

export default Text
