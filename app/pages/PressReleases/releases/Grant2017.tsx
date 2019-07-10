import * as React from 'react'
import * as styles from './Releases.scss'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'

import LayoutContainer from 'components/LayoutContainer'
import TypeHeading from 'components/TypeHeading'
import Section from 'components/Section'
import Helmet from 'react-helmet'
import MediaCard from 'components/MediaCard'
import Text from 'components/Text'

@inject('main')
@observer
class Grant2017 extends React.Component {
  public render() {
    return (
      <div>
        <Helmet title="Newsroom" />
        <Section>
          <LayoutContainer classes={styles.Vision}>
            <div className={styles.VisionBody}>
              <Text.Paragraph type="visionHeading">
                Sia receives $400k grant from INBlockchain for development of its cloud storage
                platform
              </Text.Paragraph>
              <Text.Paragraph bold>Boston, MA - July 11th, 2017</Text.Paragraph>
              <Text.Paragraph>
                Nebulous today has received a $400,000 grant from{' '}
                <a href="http://inblockchain.com/">INBlockchain</a> for Sia development. The Sia
                network has grown rapidly in 2017, and now consists of almost 1000 hosts across the
                world offering a collective 3+ PB of storage capacity. INBlockchain’s grant will
                allow Nebulous to focus on building Sia into the storage layer of the internet.
              </Text.Paragraph>

              <Text.Paragraph>
                “We are thrilled to receive INBlockchain’s generous grant and look forward to
                continuing Sia development,” said David Vorick, cofounder and CEO of Nebulous. “This
                grant means Sia does not need to focus on fundraising, and can focus entirely on
                delivering strong technology.”
              </Text.Paragraph>

              <Text.Paragraph>
                Sia is a decentralized data storage platform that connects renters seeking cloud
                storage to a worldwide network of hosts offering storage capacity. Hosts and renters
                form storage smart-contracts that are stored on the Sia blockchain. Sia splits apart
                and encrypts all files, ensuring privacy and security. By creating a marketplace
                where thousands of hosts bid on storage contracts, costs are far lower than
                traditional cloud providers. Ultimately, Sia aims to be the backbone storage layer
                of the internet.
              </Text.Paragraph>

              <Text.Paragraph>
                INBlockchain provided the grant so that the Sia team can focus on development and
                not on fundraising. "Don't worry about money, just have things well done,” said Li
                Xiaolai, founder of INBlockchain.
              </Text.Paragraph>

              <Text.Paragraph>
                Sia will release v1.3.0 this week, and will introduce features like file sharing
                over the coming months.{' '}
              </Text.Paragraph>

              <TypeHeading level={6}>About Nebulous</TypeHeading>
              <Text.Paragraph>
                Nebulous, Inc. is the parent company to Sia. Currently a team of four, Nebulous’
                focus is reliable, decentralized infrastructure to help bring forward the future.
                Sia is currently the primary project of the Nebulous team.
              </Text.Paragraph>

              <TypeHeading level={6}>About INBlockchain</TypeHeading>
              <Text.Paragraph>
                INBlockchain is a China-based firm founded by Li Xiaolai that invests in what they
                call Meaningful Blockchain Applications, or MBAcoins. Learn more about their
                investment philosophy <a href="https://github.com/xiaolai/INB-Principles/">here</a>.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Grant2017
