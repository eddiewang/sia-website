import * as React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { variationName } from 'utilities/styles'
import { isUrlExternal } from 'utilities//feature-detect'
import AssetSVG, { Props as AssetProps } from '../AssetSVG'
import Circle from './Circle'

import * as styles from './Icon.scss'

type IconType = 'svg' | 'image'
type IconSize = '7' | '8' | '12' | '16' | '20' | '64'
type IconRotate = '90' | '180' | '270'

export interface Props {
  id?: string
  href?: string
  accessibleLabel?: string
  type?: IconType
  size?: IconSize
  rotate?: IconRotate
  classes?: string
}

export default class Icon extends React.Component<Props & AssetProps, {}> {
  public static Circle = Circle

  public render() {
    const {
      id,
      href,
      accessibleLabel,
      type,
      size,
      rotate,
      classes,
      src,
      viewBox,
      aspectRatio,
      title,
      ...otherProps
    } = this.props
    const iconType = type ? type : 'svg'

    const className = classNames(
      styles.Icon,
      iconType && styles[variationName('type', iconType)],
      size && styles[variationName('size', size)],
      rotate && styles[variationName('rotate', rotate)],
      classes
    )

    const renderAsset =
      iconType === 'svg' ? (
        <AssetSVG
          src={src}
          viewBox={viewBox}
          aspectRatio={aspectRatio}
          title={title}
          {...otherProps}
        />
      ) : (
        <img src={src} alt={title} {...otherProps} />
      )

    function renderMe() {
      if (href) {
        if (isUrlExternal(href) || /^https?:\/\//.test(href)) {
          return (
            <a
              target="_blank"
              href={href}
              className={className}
              aria-label={accessibleLabel}
              id={id}
            >
              {renderAsset}
            </a>
          )
        } else {
          return (
            <Link to={href} className={className} aria-label={accessibleLabel} id={id}>
              {renderAsset}
            </Link>
          )
        }
      } else {
        return (
          <div className={className} aria-label={accessibleLabel} id={id}>
            {renderAsset}
          </div>
        )
      }
    }

    return renderMe()
  }
}
