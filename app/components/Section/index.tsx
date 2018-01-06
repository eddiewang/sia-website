import * as React from 'react'
import * as classNames from 'classnames'
import { variationName } from 'utilities/styles'

import * as styles from './Section.scss'

type SectionType = 'main' | 'home' | '404' | 'skyLight' | 'sky'

export interface Props {
  type?: SectionType,
  bordered?: boolean,
  children?: React.ReactNode
  classes?: string
}

export default class Section extends React.Component<Props, {}> {
  public render() {
    const { type, children, bordered, classes } = this.props

    const className = classNames(styles.Section, type && styles[variationName('type', type)], bordered && styles[variationName('is', 'bordered')], classes)

    return <section className={className}>{children}</section>
  }
}
