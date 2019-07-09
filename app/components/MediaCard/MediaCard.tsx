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
import { TypeHeading } from 'components/TypeHeading/TypeHeading.scss'

interface Props {
  type: 'video' | 'talks' | 'documentation' | 'blog' | 'link'
  customTitle?: string
  // Should be mandantory
  href?: string
}

class MediaCard extends React.Component<Props, {}> {
  public render() {
    const { type, children, href, customTitle } = this.props
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
      default:
        console.warn('Something is very wrong - wrong prop for Media Card!')
    }
    return (
      <a href={href || '#'} target="_blank" className={styles.MediaCard}>
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
