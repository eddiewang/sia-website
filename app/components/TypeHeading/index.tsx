import * as React from 'react'
import * as classNames from 'classnames'
import { variationName } from 'utilities//styles'
import * as styles from './TypeHeading.scss'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
const HeadingTagName = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5' , 6: 'h6'}

export interface Props {
  level: HeadingLevel
  style?: HeadingLevel
  inverse?: boolean
  element?: string
  children?: React.ReactNode
  underlined?: boolean,
  tight?: boolean,
  inline?: boolean,
  lighter?: boolean,
  classes?: string,
  type?: string
}

export default function TypeHeading({
  level,
  style,
  inverse,
  underlined,
  inline,
  tight,
  classes,
  lighter,
  type,
  element: Element = HeadingTagName[level],
  children
}: Props) {
  const hasStyle = style !== undefined
  const differentStyle = hasStyle && level !== style

  const className = classNames(
    styles.TypeHeading,
    !differentStyle && styles[variationName('level', level.toString())],
    style && differentStyle && styles[variationName('level', style.toString())],
    inverse && styles[variationName('is', 'inverse')],
    underlined && styles[variationName('is', 'underlined')],
    inline && styles[variationName('is', 'inlined')],
    tight && styles[variationName('is', 'tight')],
    lighter && styles[variationName('is', 'lighter')],
    type && styles[variationName('type', type)],
    classes
  )

  return <Element className={className}>{children}</Element>
}
