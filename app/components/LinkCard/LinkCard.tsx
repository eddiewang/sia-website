import React from 'react'
import Text from 'components/Text'

import * as styles from './LinkCard.scss'

class LinkCard extends React.Component {
  public render() {
    return (
      <div className={styles.Card}>
      <div className={styles.CardTop}>
      <Text type="linkCardHeader">Title</Text>
      <Text type="linkCardText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</Title>
      </div>
      <div className={styles.CardBottom}>
      <Text type="linkCardFooter">Getting Started Guide ></Text>
      <div className={styles.CardLinks}>
        <Text.Link type="linkCardLink" href="#">Windows</Text.Link>
      </div>
      </div>
      </div>
    )
  }
}

export default LinkCard
