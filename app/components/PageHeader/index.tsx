import * as React from 'react'
import classNames from 'classnames'
import LayoutContainer from '../LayoutContainer'
import Icon from 'components/Icon'
import Text from 'components/Text'

import * as styles from './PageHeader.scss'

import LogoSVG from 'svg/sia-wordmark.svg'

export interface Props {
  children?: React.ReactNode
}

export default function PageHeader({ children }: Props) {
  const className = classNames(styles.PageHeader)
  return (
    <div>
      <div className={styles.Announcement}>
        <LayoutContainer classes={styles.AnnouncementLayout}>
          <Text.Link to="/funding2019" type="topbarLink">
            Sia announces a $3.25M funding round led by Bain Capital Ventures!
          </Text.Link>
        </LayoutContainer>
      </div>
      <header id="PageHeader" className={className}>
        <LayoutContainer type="header">
          <Icon
            src={LogoSVG.id}
            viewBox={LogoSVG.viewBox}
            aspectRatio="xMinYMin"
            href="/"
            accessibleLabel="Sia, Back to Home"
            classes={styles.LogoFull}
            aria-hidden="true"
            id="qa-back-to-home"
          />
          {children}
        </LayoutContainer>
      </header>
    </div>
  )
}
