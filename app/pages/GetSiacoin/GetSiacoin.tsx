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
                title="Binance"
                content="Based in Malta, Binance is a popular crypto-to-crypto exchange."
                links={[
                  {
                    title: 'binance.com >',
                    to: 'https://www.binance.com/en/trade/SC_BTC'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                title="Bittrex"
                content="Based in the USA, Bittrex is a popular crypto-to-crypto exchange that is currently rolling out USD deposits."
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
                content="Shapeshift enables users to quickly exchange small amounts of cryptocurrency. Most user-friendly."
                links={[
                  {
                    title: 'shapeshift.io >',
                    to: 'https://shapeshift.io/'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                title="Poloniex"
                content="Based in the USA and recently acquired by Circle, Poloniex is a popular crypto-to-crypto exchange."
                links={[
                  {
                    title: 'poloniex.com >',
                    to: 'https://poloniex.com/exchange#btc_sc'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                title="Upbit"
                content="Based in South Korea and partnered with Bittrex, Upbit is a popular crypto-to-crypto exchange."
                links={[
                  {
                    title: 'upbit.com >',
                    to: 'https://upbit.com/'
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
