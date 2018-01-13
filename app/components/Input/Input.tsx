import * as React from 'react'
import * as classNames from 'classnames'
import { variationName } from 'utilities/styles'
import * as styles from './Input.scss'

interface Props {
  value: string
  placeholder: string
  type?: string
  onChange(e: any): void
}
class Input extends React.Component<Props, {}> {
  public render() {
    const { value, onChange, placeholder, type } = this.props
    const InputClass = classNames(styles.Input, type && styles[variationName('type', type)])

    return (
      <input className={InputClass} value={value} onChange={onChange} placeholder={placeholder} />
    )
  }
}

export default Input
