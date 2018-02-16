import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import * as styles from './Button.scss'
import classNames from 'classnames'
import { variationName } from 'utilities/styles'
import { isUrlExternal } from 'utilities/feature-detect'

// type ButtonType = 'main' | 'nav' | 'hero' | 'largeCTA'

export interface Props {
  type?: string
  children?: React.ReactNode
  classes?: string
  to?: string
  href?: string
}

class Link extends React.Component<Props, {}> {
  public render() {
    const { children, type, classes, to, href } = this.props
    const className = classNames(
      styles.Button,
      styles.Link,
      type && styles[variationName('type', type)],
      classes
    )
    if (href) {
      return (
        <a target="_blank" href={href} className={className}>
          {children}
        </a>
      )
    }
    return (
      <RouterLink to={to} className={className}>
        {children}
      </RouterLink>
    )
  }
}

export default Link
