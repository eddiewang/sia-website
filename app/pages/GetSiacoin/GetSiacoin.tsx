import * as React from 'react'
import { inject, observer } from 'mobx-react'

import LayoutContainer from 'components/LayoutContainer'
import TypeHeading from 'components/TypeHeading'
import Section from 'components/Section'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Text from 'components/Text'
import Avatar from 'components/Avatar'
import LinkCard from 'components/LinkCard'
import Helmet from 'react-helmet'

import * as styles from './GetSiacoin.scss'

@inject('main')
@observer
class GetSiacoin extends React.Component {
  public render() {
    return (
      <div>
        <Helmet title="Get Siacoin" />
        <Section>
          <LayoutContainer>
            <TypeHeading level={6}>Preferred Exchanges</TypeHeading>
            <div className={styles.Exchanges}>
              <LinkCard
                darkTitle
                title="Bittrex"
                content="Based and fully regulated in the USA, Bittrex is the go-to spot for traders who demand lightning fast trade execution, stable wallets, and industry-best security practices."
                links={[
                  {
                    title: 'bittrex.com >',
                    to: 'http://bittrex.com/Market/Index?MarketName=btc-SC'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                title="Shapeshift"
                content="Shapeshift is an innovative new low-friction cryptocurrency exchange that doesn't have a lengthy signup process. Simply set your input to a currency that you have, set the output to Siacoin, put your Siacoin address in the box, and click start."
                links={[
                  {
                    title: 'shapeshift.io >',
                    to: 'https://shapeshift.io/'
                  }
                ]}
              />
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default GetSiacoin
