import React from 'react'
import Link from './Link'
import * as styles from './Text.scss'

interface Props {
  children?: React.ReactNode
}

class Text extends React.PureComponent<Props, {}> {
  public static Link = Link

  public render() {
    const { children } = this.props
    return (
      <p className={styles.Text}>{children}</p>
    )
  }
}

export default Text
