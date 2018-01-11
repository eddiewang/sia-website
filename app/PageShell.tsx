import React, { ReactChild } from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

const PageShell = Component => (
  <Transition in={true} timeout={duration}>
    {state => {
      console.log(state)
      return (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          <Component />
        </div>
      )
    }}
  </Transition>
)

export default PageShell
