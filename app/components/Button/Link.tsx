import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import * as styles from './Button.scss'
import * as classNames from 'classnames'
import { variationName } from 'utilities/styles'

type ButtonType = 'main' | 'nav' | 'hero' | 'largeCTA'

export interface Props {
  type?: ButtonType
  children?: React.ReactNode
  classes?: string
  to: string
}

class Link extends React.Component<Props, {}> {
  public render() {
    const { children, type, classes, to  } = this.props
    const className = classNames(styles.Button, styles.Link, type && styles[variationName('type', type)], classes)
    return <RouterLink to={to} className={className}>{children}</RouterLink>
  }
}

export default Link
