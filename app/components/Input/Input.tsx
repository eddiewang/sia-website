import * as React from 'react'
import * as styles from './Input.scss'

interface Props {
  value: string
  placeholder: string
  onChange(e: any): void
}
class Input extends React.Component<Props, {}> {
  public render() {
    const { value, onChange, placeholder } = this.props

    return (
      <input className={styles.Input} value={value} onChange={onChange} placeholder={placeholder} />
    )
  }
}

export default Input
