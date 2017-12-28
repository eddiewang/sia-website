import * as React from 'react'
import * as classNames from 'classnames'
import { variationName } from 'utilities/styles'

import * as styles from './Section.scss'

type SectionType = 'main' | 'home' | '404'

export interface Props {
  type?: SectionType,
  bordered?: boolean,
  children?: React.ReactNode
}

export default class Section extends React.Component<Props, {}> {
  public render() {
    const { type, children, bordered } = this.props

    const className = classNames(styles.Section, type && styles[variationName('type', type)], bordered && styles[variationName('is', 'bordered')])

    return <section className={className}>{children}</section>
  }
}
