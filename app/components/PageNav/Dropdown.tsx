import * as React from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames'

import * as styles from './PageNav.scss'
import { NavItem } from './index'
import { isUrlExternal } from 'utilities/feature-detect'
import { inject, observer } from 'mobx-react'

export interface Props {
  title: string
  subitems: NavItem[]
  main?: any
}

interface State {
  visible: boolean
}

@inject('main')
@observer
class Dropdown extends React.Component<Props, State> {
  public state: State = {
    visible: false
  }
  public toggleDropdown = () => {
    this.setState({
      visible: !this.state.visible
    })
  }
  public render() {
    const { title, subitems } = this.props
    const { visible } = this.state
    const className = classNames(styles.Item, styles.Dropdown)
    const sublistClass = classNames(styles.Sublist, visible && styles.SublistVisible)
    const mapSubitems = subitems.map((s: NavItem, i) => {
      if (isUrlExternal(s.path)) {
        return (
          <li key={i}>
            <a className={styles.Link} href={s.path}>
              {s.name}
            </a>
          </li>
        )
      } else {
        return (
          <li key={i}>
            <Link className={styles.Link} to={s.path}>
              {s.name}
            </Link>
          </li>
        )
      }
    })
    return (
      <li className={className}>
        <div onClick={this.toggleDropdown} className={styles.Link}>
          {title}
        </div>
        <ul className={sublistClass}>{mapSubitems}</ul>
      </li>
    )
  }
}

export default Dropdown
