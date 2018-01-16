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
                icon="third"
                title="Bittrex"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                links={[
                  {
                    title: 'bittrex.com >',
                    to: 'http://bittrex.com/Market/Index?MarketName=btc-SC'
                  }
                ]}
              />
              <LinkCard
                darkTitle
                icon="third"
                title="Shapeshift"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
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
