import React from 'react'
import Icon from 'components/Icon'
import Text from 'components/Text'
import { capitalize } from 'utilities//string'

import styles from './MediaCard.scss'

import Video from 'svg/media-video.svg'
import Talk from 'svg/media-talk.svg'
import Documentation from 'svg/media-document.svg'
import Blog from 'svg/media-blog.svg'
import MLink from 'svg/media-link.svg'
import PR from 'svg/media-pr.svg'
import { TypeHeading } from 'components/TypeHeading/TypeHeading.scss'

interface Props {
  type: 'video' | 'talks' | 'documentation' | 'blog' | 'link' | 'pr'
  customTitle?: string
  target: string
  // Should be mandantory
  href?: string
}

class MediaCard extends React.Component<Props, {}> {
  static defaultProps = {
    target: '_blank'
  }
  public render() {
    const { type, children, href, customTitle, target } = this.props
    let mediaType
    switch (type) {
      case 'video':
        mediaType = Video
        break
      case 'talks':
        mediaType = Talk
        break
      case 'documentation':
        mediaType = Documentation
        break
      case 'blog':
        mediaType = Blog
        break
      case 'link':
        mediaType = MLink
        break
      case 'pr':
        mediaType = PR
        break
      default:
        console.warn('Something is very wrong - wrong prop for Media Card!')
    }
    return (
      <a href={href || '#'} target={target} className={styles.MediaCard}>
        <div className={styles.MediaCardUpper}>
          <Icon
            src={mediaType.id}
            viewBox={mediaType.viewBox}
            aspectRatio="xMinYMin"
            accessibleLabel={type}
            aria-hidden="true"
            classes={styles.MediaCardIcon}
          />
        </div>
        <div className={styles.MediaCardLower}>
          <Text type="mediaCardTitle">{capitalize(customTitle || type)}</Text>
          <Text.Paragraph type="mediaCardText">{children}</Text.Paragraph>
        </div>
      </a>
    )
  }
}

export default MediaCard
