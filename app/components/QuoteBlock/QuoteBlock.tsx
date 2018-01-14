import * as React from 'react'
import * as styles from './QuoteBlock.scss'
import * as classNames from 'classnames'
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
    content: 'Sia is seriously really cool.',
    author: 'Random Dude',
    role: 'Managing Director, T-rex Capital Management',
    key: 1
  }
]

@inject('main')
@observer
class QuoteBlock extends React.Component<Props, {}> {
  public sliderTimer
  public componentDidMount() {
    const slideLength = Quotes.length
    this.sliderTimer = setInterval(() => {
      this.props.main.aboutSliderIndex = (this.props.main.aboutSliderIndex + 1) % slideLength
    }, 10000)
  }
  public componentWillUnmount() {
    clearInterval(this.sliderTimer)
  }
  public render() {
    const { main } = this.props
    const { aboutSliderIndex } = main

    return (
      <div>
        <TransitionGroup component={SliderWrap}>
          <Quote {...Quotes[main.aboutSliderIndex]} duration={500} />
        </TransitionGroup>
        <div className={styles.Selector}>
          {Quotes.map((_, i) => {
            const dotClass = classNames(
              styles.SelectorDot,
              i === aboutSliderIndex && styles.SelectorDotActive
            )
            return <div key={i} className={dotClass} onClick={this.setSlider(i)} />
          })}
        </div>
      </div>
    )
  }
  private setSlider = i => e => {
    e.preventDefault()
    this.props.main.aboutSliderIndex = i
  }
}

export default QuoteBlock
