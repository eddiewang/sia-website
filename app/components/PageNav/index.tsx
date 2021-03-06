import React from 'react'
import { withRouter, InjectedRouter } from 'react-router'
import classNames from 'classnames'
import { variationName } from 'utilities/styles'

import withBreakpoint from '../../components/WithBreakpoint'
import { Context as BreakpointContext, Breakpoint } from '../../components/BreakpointProvider'
// import GlobalSearch from '../../components/GlobalSearch';
import Icon from '../../components/Icon'

import Activator from './Activator'
import Item from './Item'
import Button from 'components/Button'
import Dropdown from './Dropdown'

import * as styles from './PageNav.scss'

export interface NavItem {
  name: string
  path: string
  subitems?: NavItem[]
}

export interface Props {
  items: NavItem[]
  location: any
  activePath: string
  basePath: string
  data?: any // this needs to be typed!
}

interface State {
  opened: boolean
  sticky: boolean
  showSearch: boolean
}

class PageNav extends React.Component<Props & BreakpointContext, State> {
  public state: State = {
    opened: false,
    sticky: false,
    showSearch: false
  }

  private previousLocation: Location = this.props.location

  public componentDidUpdate(oldProps: BreakpointContext) {
    const { opened } = this.state

    const { currentBreakpoint, location } = this.props
    const { currentBreakpoint: oldBreakpoint } = oldProps

    const movingToDesktop =
      currentBreakpoint >= Breakpoint.Desktop && oldBreakpoint === Breakpoint.Mobile

    const justNavigated = location !== this.previousLocation

    if (opened && (movingToDesktop || justNavigated)) {
      this.setState({ opened: false })
    }

    this.previousLocation = location
  }

  public showSearch = () => {
    this.setState({ showSearch: true })
  }

  public onSearchClose = () => {
    this.setState({ showSearch: false })
  }

  public close = () => {
    this.setState({ opened: false })
  }

  public render() {
    const { activePath, basePath, currentBreakpoint, items } = this.props
    const { opened } = this.state

    const classNameInterior = classNames(
      styles.Interior,
      opened && styles[variationName('is', opened && 'opened')]
    )

    const menuAriaHidden = !(opened || currentBreakpoint === Breakpoint.Desktop)

    const pageNavListItems = items.map(({ path, name, subitems, link }: NavItem, index: number) => {
      if (subitems) {
        return <Dropdown key={index} title={name} subitems={subitems} />
      } else if (link) {
        return <Item key={index} link={link} href="" title={name} target="_blank" current={false} />
      } else {
        const fullPath = `${basePath}/${path}`
        const isActiveRoute = activePath.indexOf(fullPath.replace(/([^/])\/.+$/, '$1')) === 0

        return <Item key={index} href={fullPath} title={name} current={false} />
      }
    })

    const downloadButton = (
      <Button.Link to="/get-started" key="getStarted" type="nav">
        Get Started
      </Button.Link>
    )
    pageNavListItems.push(downloadButton)
    return (
      <div id="navigation" className={styles.PageNav}>
        <nav id="PageNavInterior" className={classNameInterior} aria-hidden={menuAriaHidden}>
          <ul className={styles.List}>{pageNavListItems}</ul>
        </nav>

        {/* <GlobalSearch showMobile={this.state.showSearch} onClose={this.onSearchClose} /> */}

        <Activator toggled={opened} onClick={this.toggleOpenedState} />
        <button
          className={styles.SearchActivator}
          onClick={this.showSearch}
          aria-label="Show search"
        >
          {/* <Icon src="IconSearch" size="20" aria-hidden="true" /> */}
        </button>
      </div>
    )
  }

  private toggleOpenedState = () => {
    this.setState(state => {
      return { opened: !state.opened }
    })
  }
}

export default withRouter<Props>(withBreakpoint(PageNav))
