import * as React from 'react'
import * as styles from './QuoteBlock.scss'
import classNames from 'classnames'
import { inject, observer } from 'mobx-react'
import TransitionGroup from 'react-transition-group/TransitionGroup'

import Text from 'components/Text'
import Quote, { QuoteProps } from './Quote'
import { setInterval } from 'timers'

const SliderWrap = ({ children }) => <div className={styles.QuoteBlock}>{children}</div>

interface Props {
  main: any
}

const Quotes: QuoteProps[] = [
  {
    content:
      "Beyond their technical skills, what attracted us to Sia is the team’s commitment to decentralization and a value proposition that aligns investors' economic goals with developers’ interests.",
    author: 'Josh Langsam',
    role: 'Managing Director, Raptor Capital Management',
    key: 0
  },
  {
    content:
      "Sia's founding team has a long track record putting the project and community, not themselves, first. They always act with the highest integrity, even when no one is looking.",
    author: 'Drew Volpe',
    role: 'Managing Director, First Star (aka Procyon Ventures)',
    key: 1
  }
]

@inject('main')
@observer
class QuoteBlock extends React.Component<Props, {}> {
  public slideInterval
  public state = {
    slide: 0
  }
  public render() {
    const { main } = this.props
    const { slide } = this.state

    return (
      <div>
        <TransitionGroup component={SliderWrap}>
          <Quote {...Quotes[this.state.slide]} duration={500} />
        </TransitionGroup>
        <div className={styles.Selector}>
          {Quotes.map((_, i) => {
            const dotClass = classNames(styles.SelectorDot, i === slide && styles.SelectorDotActive)
            return <div key={i} className={dotClass} onClick={this.setSlider(i)} />
          })}
        </div>
      </div>
    )
  }
  private setSlider = i => e => {
    e.preventDefault()
    this.setState({
      slide: i
    })
  }
}

export default QuoteBlock
