import React from 'react'
import Link from 'react-router-dom'
import * as styles from './Button.scss'
import * as classNames from 'classnames'
import { variationName } from 'utilities/styles'

type ButtonType = 'main' | 'nav' | 'hero' | 'largeCTA'

export interface Props {
  type?: ButtonType
  children?: React.ReactNode
  classes?: string
}

class Button extends React.Component<Props, {}> {
  public render() {
    const { children, type, classes } = this.props
    const className = classNames(styles.Button, type && styles[variationName('type', type)], classes)
    return <button className={className}>{children}</button>
  }
}

export default Button
