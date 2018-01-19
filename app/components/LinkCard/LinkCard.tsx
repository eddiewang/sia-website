import React from 'react'
import Text from 'components/Text'
import Icon from 'components/Icon'

import * as classNames from 'classnames'
import * as styles from './LinkCard.scss'
import sia from 'svg/card-icon-logo.svg'
import third from 'svg/card-icon-thirdparty.svg'

interface Link {
  title?: string
  to?: string
}

interface Props {
  title?: string
  content?: string
  linkTitle?: string
  linkTo?: string
  links: Link[]
  darkTitle?: boolean
  icon?: 'sia' | 'third'
  active?: boolean
  tag?: number | string
}

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

class LinkCard extends React.Component<Props, {}> {
  public render() {
    const { title, active, content, linkTitle, linkTo, links, darkTitle, icon, tag } = this.props
    const renderList = links.map((l: Link, i) => (
      <Text.Link type="linkCardLink" href={l.to} key={i}>
        {l.title}
      </Text.Link>
    ))
    let renderIcon
    let renderClass
    switch (icon) {
      case 'sia':
        renderIcon = sia
        renderClass = classNames(styles.CardIcon, styles.CardIconSia)
        break
      case 'third':
        renderIcon = third
        renderClass = classNames(styles.CardIcon, styles.CardIconThird)
        break
    }
    const CardClass = classNames(styles.Card, active && styles.isActive)
    return (
      <div className={CardClass}>
        <div className={styles.CardTop}>
          <div className={styles.CardHeader}>
            <Text ink={darkTitle} type="linkCardHeader">
              {title}
            </Text>

            <div className={renderClass}>
              {renderIcon && (
                <Icon
                  src={renderIcon.id}
                  viewBox={renderIcon.viewBox}
                  aspectRatio="xMinYMin"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>
          <Text.Paragraph type="linkCardText">{content}</Text.Paragraph>
        </div>
        <div className={styles.CardBottom}>
          <div>
            {linkTo &&
              linkTitle && (
                <Text.Link to={linkTo} type="linkCardFooter">
                  {linkTitle} >
                </Text.Link>
              )}
            <div className={styles.CardLinks}>{renderList}</div>
          </div>
          {tag && <Text.Tag>{numberWithCommas(tag)} downloads</Text.Tag>}
        </div>
      </div>
    )
  }
}

export default LinkCard
