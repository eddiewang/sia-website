import * as React from 'react'
import { Switch } from 'react-router-dom'
import Transition from 'react-transition-group/Transition'
import * as Animated from 'animated/lib/targets/react-dom'

export default class AnimatedSwitch extends Switch<{}, React.ComponentClass> {
  public state = {
    animate: new Animated.Value(0),
    in: false
  }

  constructor(props) {
    super(props)
  }

  public componentWillMount() {
    // Feels really hacky. Issue here: https://github.com/reactjs/react-transition-group/issues/152
    setTimeout(() => {
      this.setState({ in: true })
    }, 0)
  }

  public componentWillUnmount() {
    this.setState({ in: false })
  }

  public componentWillAppear = cb => {
    Animated.spring(this.state.animate, { toValue: 1 }).start()
  }
  public componentWillEnter = cb => {
    setTimeout(() => Animated.spring(this.state.animate, { toValue: 1 }).start(), 250)
  }
  public componentWillLeave = cb => {
    Animated.spring(this.state.animate, { toValue: 0 }).start()
  }
  public render() {
    const style = {
      opacity: Animated.template`${this.state.animate}`,
      transform: Animated.template`
				translate3d(0,${this.state.animate.interpolate({
          inputRange: [0, 1],
          outputRange: ['12px', '0px']
        })},0)
			`
    }
    return (
      <Transition
        in={this.state.in}
        timeout={0}
        onEnter={this.componentWillAppear}
        onEntering={this.componentWillEnter}
        onExit={this.componentWillLeave}
      >
        <Animated.div style={style} className="animated-page-wrapper">
          {super.render()}
        </Animated.div>
      </Transition>
    )
  }
}
