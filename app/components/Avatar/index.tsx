import React from 'react'

import Icon from 'components/Icon'
import Text from 'components/Text'
import TypeHeading from 'components/TypeHeading'

import * as styles from './Avatar.scss'

interface Link {
  type: 'Github' | 'LinkedIn'
  url: string
}

export interface SingleAvatar {
  avatar: any
  name: string
  bio: string
  links: Link[]
}

interface Props {
  profiles: SingleAvatar[]
}

class Avatar extends React.Component<Props, {}> {
  public render() {
    const { profiles } = this.props
    const mappedProfiles = profiles.map(p => {
      const mappedLinks = p.links.map((l, i) => <Text.Link key={i} href={l.url}>{l.type}</Text.Link>)
      return (
        <div key={p.name}>
          <div className={styles.Avatar}>
            <Icon src={p.avatar.id} aspectRatio="xMinYMin" />
          </div>
          <div className={styles.AvatarBio}>
            <TypeHeading tight level={3}>
              {p.name}
            </TypeHeading>
            {mappedLinks}
            <Text>
              {p.bio}
            </Text>
          </div>
        </div>
      )
    })
    return (
    <div className={styles.AvatarWrap}>
      {mappedProfiles}
    </div>
    )
  }
}

export default Avatar
