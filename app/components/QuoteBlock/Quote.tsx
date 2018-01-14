import * as React from 'react'
import Text from 'components/Text'
import Transition from 'react-transition-group/Transition'

export interface QuoteProps {
  content: string
  author: string
  role: string
  key: number
}

interface AnimProps {
  duration: number
}

class Quote extends React.Component<QuoteProps & AnimProps, {}> {
  public render() {
    const { content, author, role, in: inProp, duration, key } = this.props
    const transitionStyles = {
      // Start with component invisible and shifted up by 10%
      entering: {
        opacity: 0,
        transform: 'translateY(100%)'
      },
      // Transition to component being visible and having its position reset.
      entered: {
        opacity: 1,
        transform: 'translateY(0)'
      },
      // Fade element out and slide it back up on exit.
      exiting: {
        opacity: 0,
        transform: 'translateY(-100%)'
      }
    }
    return (
      <Transition
        in={inProp}
        timeout={{
          enter: 0,
          exit: 0
        }}
      >
        {status => {
          if (status === 'exited') {
            return null
          }
          const defaultStyle = {
            marginBottom: '300px',
            transition: `${duration}ms ease-in`,
            transitionProperty: 'all'
          }
          const currentStyles = transitionStyles[status]
          return (
            <div style={Object.assign({}, defaultStyle, currentStyles)}>
              <Text type="quoteText">{content}</Text>
              <Text type="quoteAuthor">{author}</Text>
              <Text type="quoteRole">{role}</Text>
            </div>
          )
        }}
      </Transition>
    )
  }
}

export default Quote
