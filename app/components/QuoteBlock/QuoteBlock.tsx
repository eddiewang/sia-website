import * as React from 'react'
import * as styles from './QuoteBlock.scss'

import Text from 'components/Text'

class QuoteBlock extends React.Component {
  public render() {
    return (
      <div className={styles.QuoteBlock}>
        <Text type="quoteText">Beyond their technical skills, what attracted us to Sia is the team’s commitment to decentralization and a value proposition that aligns investors' economic goals with developers’ interests.</Text>
        <Text type="quoteAuthor">Josh Langsam</Text>
        <Text type="quoteRole">Managing Director, Raptor Capital Management</Text>
      </div>
    )
  }
}

export default QuoteBlock
