import React from 'react'
import Link from './Link'
import Spinner from 'components/Spinner'
import * as styles from './Button.scss'
import * as classNames from 'classnames'
import { variationName } from 'utilities/styles'

type ButtonType = 'main' | 'nav' | 'hero' | 'largeCTA' | 'footer'

export interface Props {
  type?: ButtonType
  children?: React.ReactNode
  classes?: string
  loading?: boolean
  onClick?(e): void
}

class Button extends React.Component<Props, {}> {
  public static Link = Link
  public render() {
    const { children, type, classes, onClick, loading } = this.props
    const className = classNames(
      styles.Button,
      type && styles[variationName('type', type)],
      classes
    )
    return (
      <button className={className} onClick={onClick}>
        {loading ? <Spinner /> : children}
      </button>
    )
  }
}

export default Button
