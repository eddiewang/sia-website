import * as React from 'react'
import * as styles from './BioCard.scss'
import classNames from 'classnames'

import Icon from 'components/Icon'
import TypeHeading from 'components/TypeHeading'
import Text from 'components/Text'
import iconMap from './iconMap'

export interface UserDetails {
  name: string
  svg: any
  social: {
    title: string
    url: string
  }
  role: string
  content?: string
}

class BioCard extends React.Component<UserDetails, {}> {
  public render() {
    const { name, svg, social, content, role } = this.props
    const CardClass = classNames(styles.Card, content && styles.Large)
    const socialType = social.title.toLowerCase()
    return (
      <div className={CardClass}>
        <div className={styles.CardTop}>
          <div className={styles.CardAvatarWrap}>
            <Icon
              src={svg.id}
              viewBox={svg.viewBox}
              aspectRatio="xMinYMin"
              aria-hidden="true"
              classes={styles.CardAvatar}
            />
          </div>
        </div>
        <div className={styles.CardBottom}>
          <TypeHeading type="bioHeading" level={6}>
            {name}
          </TypeHeading>
          <Text type="bioText">{role}</Text>
          <div className={styles.CardIconWrap}>
            <Icon
              classes={styles.CardIcon}
              href={social.url}
              src={iconMap[socialType].id}
              aspectRatio="xMinYMin"
            />
          </div>
          <div className={styles.CardDesc}>
            <Text>{content}</Text>
          </div>
        </div>
      </div>
    )
  }
}

export default BioCard
