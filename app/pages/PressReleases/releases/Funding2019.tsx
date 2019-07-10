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
class Funding2019 extends React.Component {
  public render() {
    return (
      <div>
        <Helmet title="About" />
        <Section>
          <LayoutContainer classes={styles.Vision}>
            <div class={styles.VisionBody}>
              <Text.Paragraph type="visionHeading">
                Sia Announces $3.25M Seed Round to Accelerate Development of the Sia Decentralized
                Cloud Storage Platform
              </Text.Paragraph>

              <Text.Paragraph>
                <i>
                  Bain Capital Ventures leads the round of financing; Sia announces landmark v1.4.1
                  release
                </i>
              </Text.Paragraph>

              <Text.Paragraph bold>Boston, MA – July 10th, 2019</Text.Paragraph>

              <Text.Paragraph>
                Nebulous, the company building the Sia decentralized cloud storage platform, today
                announced it has closed a $3.25M funding round led by Bain Capital Ventures with
                participation from Bessemer Venture Partners, A.Capital, Collaborative Fund,
                Dragonfly Capital Partners, Hack VC, INBlockchain, SV Angel, and other notable
                investors. The round will help the company scale and accelerate the development and
                adoption of Sia.
              </Text.Paragraph>

              <Text.Paragraph>
                Today’s cloud storage industry, monopolized by tech giants, struggles with
                fundamental challenges in price, privacy, and reliability. Sia, the leading
                decentralized cloud storage platform, leverages blockchain technology to create a
                data storage marketplace that is more robust and more affordable than traditional
                cloud storage providers. Data storage on Sia currently costs about $1 per TB per
                month – an order of magnitude cheaper than Amazon S3 – and provides users with true
                privacy and control over their data.
              </Text.Paragraph>

              <Text.Paragraph>
                “Just as all conventional apps need conventional storage, decentralized apps need
                decentralized storage, which makes decentralized storage a core foundation of
                decentralized finance and the decentralized web,” said Salil Deshpande, partner at
                Bain Capital Ventures. “Sia is in production today, without architectural issues,
                and without reliance on yet-to-come fundamental technical breakthroughs.”
              </Text.Paragraph>

              <Text.Paragraph>
                Since company inception, users of the platform have already stored over 4 PB of data
                across 925,000 storage smart contracts. The Sia network currently has 2 PB of
                available storage capacity and Sia software has been downloaded over 1 million
                times. Nebulous has also fostered a thriving community of third-party developers.
                These contributors have launched file sharing websites like{' '}
                <a href="https://pixeldrain.com" target="_blank">
                  PixelDrain
                </a>{' '}
                and{' '}
                <a href="https://goobox.io/" target="_blank">
                  Goobox
                </a>, cloud offerings like{' '}
                <a href="https://filebase.com" target="_blank">
                  Filebase
                </a>{' '}
                and{' '}
                <a href="hhttps://sia-cloud.tech" target="_blank">
                  Sia-Cloud
                </a>,and companion apps like{' '}
                <a href="https://keops.cc/decentralizer" target="_blank">
                  Decentralizer
                </a>{' '}
                and{' '}
                <a href="https://siacentral.com" target="_blank">
                  SiaCentral
                </a>.
              </Text.Paragraph>

              <Text.Paragraph>
                “The Sia developer community has seen massive growth in the past 3 months, including
                the addition of both consumer-facing and enterprise-facing startups that use Sia to
                power their applications,” said David Vorick, Nebulous CEO. “These companies have
                brought substantial adoption and diversification to the Sia ecosystem, and are
                demonstrating that Sia is making a difference today in the lives of consumers and
                businesses.”
              </Text.Paragraph>

              <Text.Paragraph>
                In addition to the funding news, Nebulous just released v1.4.1, making Sia
                production-ready for storage. Version 1.4.1 adds seed-based file recovery, allowing
                users to backup and restore their files on a new computer using just their 29-word
                seed. Combined with massively increased scalability to 20 TB per uploader, Sia is
                now competitive with traditional cloud storage providers. Features slated for
                release later this year include blazing-fast video streaming, integrations with
                popular applications, and early CDN capabilities.
              </Text.Paragraph>

              <Text.Paragraph>
                Interested in Sia for personal or business use?{' '}
                <a href="/get-started">Download today</a> and contact us via{' '}
                <a href="https://discord.gg/sia" target="_blank">
                  Discord
                </a>{' '}
                or email at hello@sia.tech.
              </Text.Paragraph>

              <Text.Paragraph>
                Want to help us re-decentralize the Internet? Nebulous is hiring for positions in
                engineering and operations. Learn more about our projects and{' '}
                <a href="https://discord.gg/sia" target="_blank">
                  apply today
                </a>!
              </Text.Paragraph>

              <TypeHeading level={6}>About Nebulous</TypeHeading>
              <Text.Paragraph>
                <a href="https://nebulous.tech" target="_blank">
                  Nebulous
                </a>{' '}
                builds uncompromising blockchain hardware and software infrastructure for the
                decentralized internet. This includes Sia, the leading decentralized cloud storage
                platform, and{' '}
                <a href="https://obelisk.tech" target="_blank">
                  Obelisk
                </a>, the USA's leading ASIC mining hardware producer.
              </Text.Paragraph>

              <Text.Paragraph>
                Nebulous defines uncompromising infrastructure as scalable, trustless, secure, and –
                most important – fully decentralized. In a blockchain industry filled with hype but
                lacking substance, Nebulous stands out as one of the few deeply technical teams that
                consistently delivers real products with significant potential.
              </Text.Paragraph>

              <Text.Paragraph>
                Nebulous, Inc. was founded in 2014 and is headquartered in Boston. Prior to the
                round led by Bain Capital Ventures, Nebulous was funded by Raptor Group, First Star
                Ventures, Fenbushi Capital, and INBlockchain.
              </Text.Paragraph>

              <TypeHeading level={6}>About Bain Capital Ventures</TypeHeading>
              <Text.Paragraph>
                <a href="http://www.baincapitalventures.com" target="_blank">
                  Bain Capital Ventures
                </a>{' '}
                partners with disruptive founders to accelerate their ideas to market. The firm
                invests from seed to growth in startups driving transformation across industries,
                from security and cloud infrastructure to logistics and e-commerce to finance and
                healthcare. The firm has helped launch and commercialize more than 240 companies,
                including DocuSign, Jet.com, Kiva Systems, Lime, LinkedIn, Rapid7, Redis Labs, Rent
                the Runway, Rubrik, SendGrid, and SurveyMonkey. Bain Capital Ventures has $5.2
                billion in assets under management with offices in San Francisco, New York, Boston
                and Palo Alto. Follow the firm via{' '}
                <a href="https://www.linkedin.com/company/bain-capital-ventures/" target="_blank">
                  LinkedIn
                </a>{' '}
                or{' '}
                <a href="https://twitter.com/BainCapVC" target="_blank">
                  Twitter
                </a>.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Funding2019
