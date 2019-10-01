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
class Settlement2019 extends React.Component {
  public render() {
    return (
      <div>
        <Helmet title="About" />
        <Section>
          <LayoutContainer classes={styles.Vision}>
            <div class={styles.VisionBody}>
              <Text.Paragraph type="visionHeading">
                Nebulous Enters into Settlement with SEC Regarding 2014 Offering of Sianotes and
                2015 Conversion into Siafunds
              </Text.Paragraph>

              <Text.Paragraph>
                <i>
                  The SEC takes no enforcement action with respect to Siacoins or current activity
                  on the Sia network
                </i>
              </Text.Paragraph>

              <Text.Paragraph bold>Boston, MA – October 1st, 2019</Text.Paragraph>

              <Text.Paragraph>
                Nebulous, the company building the Sia decentralized cloud storage network,
                announced today that it has entered into a settlement with the Securities and
                Exchange Commission (SEC). Without admitting or denying liability, Nebulous settled
                an SEC claim relating to the unregistered May 2014 offer and sale of Sianotes and
                the June 2015 conversion of Sianotes into Siafunds. As reflected in the settled
                order, the SEC did not take any enforcement action with respect to the Siacoin token
                or any current activity on the Sia network, and the order does not require Nebulous
                to register the Siacoin token as a security with the SEC.
              </Text.Paragraph>

              <Text.Paragraph>
                The Sia network has employed a <b>two-token model</b> since its 2014 whitepaper and
                2015 launch; Siacoins are used to buy and sell cloud storage space while Siafund
                investors receive a small share of total storage revenue. This two-token model
                creates an ideal ecosystem, focusing Siafund investors and the Nebulous team on
                product development and long-term network growth. Today, users are storing over 500
                terabytes of data on the Sia network.
              </Text.Paragraph>

              <Text.Paragraph>
                In May 2014, Nebulous conducted a $120,000 offering of a token called Sianotes,
                which were converted to Siafunds upon network launch in 2015. The offering took
                place through Bitcointalk.org, three months before the Ethereum offering. During
                these earliest stages of development of blockchain technologies, the Nebulous team
                did not anticipate that the SEC might later deem Sianotes or any other blockchain
                assets to be securities.
              </Text.Paragraph>

              <Text.Paragraph>
                In April 2018, Nebulous conducted a new offering of Siafunds. By then, however, the
                SEC had issued its 2017{' '}
                <a href="https://www.sec.gov/litigation/investreport/34-81207.pdf" target="_blank">
                  DAO Report
                </a>{' '}
                and the SEC Chairman and SEC staff’s public statements signaled a shift in
                regulatory focus that caused Nebulous to understand that the SEC might consider
                Siafunds to be securities. Armed with this knowledge, Nebulous engaged sophisticated
                securities counsel and completed a $1.5M Regulation D offering of Siafunds that it
                called a Tokenized Securities Offering (TSO). The TSO properly complied with all
                requirements for such an offering.
              </Text.Paragraph>

              <Text.Paragraph>
                Shortly after the close of the April 2018 offering, Nebulous was contacted by the
                SEC which had initiated an investigation concerning Nebulous and the Sia network.
                Over the course of the SEC’s investigation, Nebulous cooperated fully and provided
                documents and information about the company, its offerings, and the general Sia
                network (including the role of Siacoins and Siafunds).
              </Text.Paragraph>

              <Text.Paragraph>
                Upon completion of its investigation, and as reflected in the settled order, the SEC
                concluded that because Siafunds were securities, the failure to register the 2014
                offering and 2015 conversion constituted violations of Section 5 of the Securities
                Act of 1933. Without admitting to or denying the SEC’s allegations, Nebulous agreed
                to a settlement and will pay disgorgement of $120,000, prejudgment interest of
                $24,601.85, and a civil money penalty of $80,000, for a total of approximately
                $225,000.
              </Text.Paragraph>

              <Text.Paragraph>
                Zach Herbert, Nebulous Chief Operating Officer, stated, “Given that Nebulous had
                properly registered its 2018 offering of Siafunds in the wake of the SEC’s 2017
                guidance regarding digital assets, we were disappointed that the SEC chose to take
                action with respect to the relatively small offering conducted years before we had
                the benefit of that guidance. However, beyond that, we are pleased at how the
                company and the network fared under such intense regulatory scrutiny and that after
                a thorough investigation, the SEC asserted no claims regarding Siacoins or the
                current operations on the Sia network.”
              </Text.Paragraph>

              <Text.Paragraph>
                David Vorick, Nebulous Cofounder and Chief Executive Officer, added, “From the
                earliest days of building Sia, we have always emphasized the importance of ethics
                and have constantly strived to safeguard user freedoms. As we continue to build the
                Sia network, we will continue to uphold these values and work towards building a
                better world that empowers individuals.”
              </Text.Paragraph>

              <Text.Paragraph>
                Questions or comments? Feel free to reach out to the Sia team at hello@sia.tech.
              </Text.Paragraph>

              <Text.Paragraph />

              <TypeHeading level={6}>Notable Information About Siacoins</TypeHeading>

              <Text.Paragraph>
                <ul>
                  <li>- Siacoins were never used for fundraising.</li>
                  <li>- Siacoins are mined via Proof-of-Work.</li>
                  <li>
                    - Nebulous pre-mined less than 0.1% of the total Siacoin supply at launch.
                  </li>
                  <li>- Nebulous currently holds less than 0.1% of the total Siacoin supply.</li>
                  <li>- Nebulous does not actively mine any Siacoins.</li>
                </ul>
              </Text.Paragraph>

              <TypeHeading level={6}>Helpful Links</TypeHeading>

              <Text.Paragraph>
                <ul>
                  <li>
                    -{' '}
                    <a
                      href="https://support.sia.tech/category/jukn3w66fk-sec-settlement"
                      target="_blank"
                    >
                      Settlement FAQs
                    </a>
                  </li>
                  <li>
                    -{' '}
                    <a
                      href="https://blog.sia.tech/the-ico-paradox-and-how-to-fix-it-3bfc61bc6eb8"
                      target="_blank"
                    >
                      Blog Post about Sia’s Two-Token Model
                    </a>
                  </li>
                  <li>
                    -{' '}
                    <a
                      href="https://www.sec.gov/litigation/admin/2019/33-10715.pdf"
                      target="_blank"
                    >
                      SEC Settlement
                    </a>
                  </li>
                  <li>
                    -{' '}
                    <a href="https://www.sec.gov/enforce/33-10715-s" target="_blank">
                      SEC Administrative Summary
                    </a>
                  </li>
                  <li>
                    -{' '}
                    <a href="https://www.sec.gov/rules/other/2019/33-10716.pdf" target="_blank">
                      SEC Waiver
                    </a>
                  </li>
                  <li>
                    -{' '}
                    <a
                      href="https://www.sec.gov/divisions/corpfin/cf-noaction/2019/nebulous-093019-506.pdf "
                      target="_blank"
                    >
                      Waiver Request Letter
                    </a>
                  </li>
                </ul>
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
                Nebulous, Inc. was founded in 2014 and is headquartered in Boston. Nebulous is
                funded by Bain Capital Ventures, Raptor Group, First Star Ventures, and other
                notable investors.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Settlement2019
