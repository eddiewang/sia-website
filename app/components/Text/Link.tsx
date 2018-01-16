import React from 'react'
import { Link } from 'react-router-dom'
import { variationName } from 'utilities/styles'
import { isUrlExternal } from 'utilities/feature-detect'
import * as styles from './Text.scss'
import * as classNames from 'classnames'

interface Props {
  href?: string
  children?: React.ReactNode
  inverse?: boolean
  type?: string
  to?: string
}

export default ({ href, children, inverse, to, type }: Props) => {
  const linkStyle = classNames(
    styles.Text,
    styles.Link,
    inverse && styles[variationName('is', 'inverse')],
    type && styles[variationName('type', type)]
  )
  if (isUrlExternal(href)) {
    return (
      <a className={linkStyle} data-polaris-unstyled target="_blank" href={href}>
        {children}
      </a>
    )
  } else if (href) {
    return (
      <Link data-polaris-unstyled className={linkStyle} to={href}>
        {children}
      </Link>
    )
  } else {
    return (
      <Link data-polaris-unstyled className={linkStyle} to={to}>
        {children}
      </Link>
    )
  }
}
