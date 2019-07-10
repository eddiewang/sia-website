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
class Funding2016 extends React.Component {
  public render() {
    return (
      <div>
        <Helmet title="Newsroom" />
        <Section>
          <LayoutContainer classes={styles.Vision}>
            <div className={styles.VisionBody}>
              <Text.Paragraph type="visionHeading">
                Sia Startup raises $750k seed round to further blockchain-powered, distributed
                storage platform
              </Text.Paragraph>
              <Text.Paragraph type="visionHeading">
                After 1.0 release, Nebulous targets enterprise expansion
              </Text.Paragraph>
              <Text.Paragraph bold>Cambridge, MA - September 7th, 2016</Text.Paragraph>
              <Text.Paragraph>
                Nebulous today has raised $750,000 for Sia, led by{' '}
                <a href="http://www.procyonventures.com">Procyon Ventures</a> and{' '}
                <a href="http://www.raptorgroup.com">Raptor Group</a>, with participation from{' '}
                <a href="http://fenbushi.vc/index_en.html">Fenbushi Capital</a> and angel investor
                Xiaolai Li. To date, Nebulous has raised $1.25M in total funding. Sia achieved its
                1.0 release in June of this year and the funding will allow the team to accelerate
                its development and further its use by enterprises.
              </Text.Paragraph>

              <Text.Paragraph>
                Sia is a collaborative data storage platform which allows users to store and
                retrieve large amounts of data quickly and securely. Smart contracts allow users to
                seamlessly acquire storage from hosts all over the world which have agreed to rent
                space on their hard drives. Sia’s blockchain-based technology ensure hosts aren’t
                able to see inside the data they store while guaranteeing the data is available when
                needed. By creating a marketplace where thousands of hosts bid on a storage
                contract, this allows the platform to be more reliable and also deliver significant
                cost savings compared to traditional cloud providers.
              </Text.Paragraph>

              <Text.Paragraph>
                "By using encryption, cryptographic contracts, and redundancy, Sia enables a
                collection of untrusted and unknown machines to be combined into a single logical
                cloud storage host that is faster, cheaper, and more reliable than traditional cloud
                storage platforms." David Vorick, cofounder and CEO, said.
              </Text.Paragraph>

              <Text.Paragraph>
                Since inception in 2014, Sia’s focus has always been on bringing strong, fully
                decentralized cloud storage to the world. The first fully decentralized prototype of
                Sia launched in June 2015, a cloud storage platform that allowed both hosts and
                renters to participate in a network that had no centralized services or single
                points of failure. The following year was spent iterating on the tech, focusing on
                scalability and on an easy-to-use third party API. June 2016 saw the release of the
                completed API, along with a compatibility promise that all programs and services
                built using the 1.0.0 API would continue to work with all future versions of Sia.
              </Text.Paragraph>

              <Text.Paragraph>
                With its 1.0 release, Sia became the first full-decentralized marketplace for cloud
                storage to move into production. Moving forward, the company’s primary focus will be
                on growing the developer community and beginning expansion into the enterprise
                market. Storage device maker Minebox has announced their forthcoming Minebox NAS
                will integrate with the platform to allow users to take full advantage of Sia for
                both storing data as well as renting space onto the network.
              </Text.Paragraph>

              <Text.Paragraph>
                "Every team that works with data in a meaningful way, from AI to precision medicine
                to Industrial IoT, is seeing an explosion in the size of the datasets they want to
                be able to work with. Sia has the potential to be a game changer for them by
                fundamentally changing how data is captured, stored, and distributed." said Procyon
                partner Drew Volpe.
              </Text.Paragraph>

              <Text.Paragraph>
                "We are impressed by Sia's distributed cloud storage platform, the community of
                engaged users, and see an opportunity for Sia to disrupt centralized cloud storage
                providers with improved security and rationalized storage expense." said Raptor
                Associate Director Joshua Langsam.
              </Text.Paragraph>

              <TypeHeading level={6}>About Nebulous</TypeHeading>
              <Text.Paragraph>
                Nebulous is the parent company to Sia. Currently a team of four, Nebulous’ focus is
                reliable, decentralized infrastructure to help bring forward the future. Sia is
                currently the primarily project of the Nebulous team.
              </Text.Paragraph>

              <TypeHeading level={6}>About Procyon</TypeHeading>
              <Text.Paragraph>
                Procyon Ventures is an early-stage, venture capital firm based in Boston, MA.
                Procyon partners with entrepreneurs solving real-world problems using data and
                machine intelligence, focusing on applications of frontier technologies such as AI,
                computational biotech, connected sensors, AR/VR, and industrial IoT. We believe in
                investing with conviction in visionary founders with deep technical experience.
                Drawing on our network of strategic partners across industries and regions, we help
                startups think big and grow fast.
              </Text.Paragraph>

              <TypeHeading level={6}>About Raptor Group</TypeHeading>
              <Text.Paragraph>
                Raptor Group Holdings is a private investment company backed by the Family Office of
                Jim Pallotta. Mr. Pallotta has been a professional and personal investor for over 30
                years. Raptor Group's culture is relentlessly entrepreneurial, opportunistic,
                flexible, and nimble; these values comprise the Firm's core DNA and manifest across
                every aspect of our business. We source and invest in companies across various
                stages and asset classes, ranging from early stage venture to both private and
                public equity. Our key investment criteria is the opportunity to leverage the team's
                operating and strategic expertise and extensive global network to add value and
                drive results.
              </Text.Paragraph>

              <TypeHeading level={6}>About Fenbushi</TypeHeading>
              <Text.Paragraph>
                Founded in 2015, Fenbushi Capital is the first China-based venture capital firm that
                exclusively invests in Blockchain-enabled companies. Our mission is to accelerate
                the inevitable future of Blockchain economy by supporting as many companies as
                possible.
              </Text.Paragraph>

              <Text.Paragraph>
                We strongly believe Blockchain technology will play an important role bringing much
                more transparency, efficiency, and robustness into the global economy. With our
                experienced partners in both traditional finance and the blockchain technology and
                many startup companies, we hope to bring this vision into fruition.
              </Text.Paragraph>
            </div>
          </LayoutContainer>
        </Section>
      </div>
    )
  }
}

export default Funding2016
