import * as React from 'react'
import * as styles from './BioCard.scss'
import classNames from 'classnames'

import Icon from 'components/Icon'
import TypeHeading from 'components/TypeHeading'
import Text from 'components/Text'

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
          <Text.Link type="bioLink" href={social.url}>
            {social.title}
          </Text.Link>
          <div className={styles.CardDesc}>
            <Text>{content}</Text>
          </div>
        </div>
      </div>
    )
  }
}

export default BioCard
