import React from 'react'
import { Link } from 'react-router-dom'
import { variationName } from 'utilities/styles'
import * as styles from './Text.scss'
import * as classNames from 'classnames'

interface Props {
  href?: string;
  to?: string;
  children?: React.ReactNode;
  inverse?: boolean
  type?: string
}



export default ({href, to, children, inverse, type} : Props) => {
  const linkStyle = classNames(
    styles.Text,
    styles.Link,
    inverse && styles[variationName('is', 'inverse')],
    type && styles[variationName('type', type)]
  )
  if (href) {
    return <a className={linkStyle} data-polaris-unstyled target='_blank' href={href}>{children}</a>
  } else {
    return <Link data-polaris-unstyled className={linkStyle} to={to}>{children}</Link>
  }
}
