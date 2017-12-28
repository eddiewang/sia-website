import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from './Text.scss'
import * as classNames from 'classnames'

interface Props {
  href?: string;
  to?: string;
  children?: React.ReactNode;
}

const linkStyle = classNames(
  styles.Text,
  styles.Link
)

export default ({href, to, children} : Props) => {
  if (href) {
    return <a className={linkStyle} data-polaris-unstyled target='_blank' href={href}>{children}</a>
  } else {
    return <Link data-polaris-unstyled className={linkStyle} to={to}>{children}</Link>
  }
}
