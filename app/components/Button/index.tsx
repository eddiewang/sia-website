import React from 'react'
import * as styles from './Button.scss'
import * as classNames from 'classnames'
import { variationName } from 'utilities/styles';

type ButtonType = 'main' | 'nav' | 'hero'

export interface Props {
  type?: ButtonType
  children?: React.ReactNode
}

class Button extends React.Component<Props, {}> {
  public render() {
    const { children, type } = this.props
    const className = classNames(styles.Button, type && styles[variationName('type', type)])
    return (
      <button className={className}>{children}</button>
    )
  }
}

export default Button
