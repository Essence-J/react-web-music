import React, { memo } from 'react'

import { discoverMenu } from '../../common/local-data'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './index.less'

export default memo(function Discover(props) {
  const { route } = props

  return (
    <div className="header-category">
      <div className="top">
        <div className="w1100 category-list">
          {discoverMenu.map(item => {
            return (
              <li key={item.title} className="item">
                <NavLink to={item.link} activeClassName="menu-active">
                  {item.title}
                </NavLink>
              </li>
            )
          })}
        </div>
      </div>
      {renderRoutes(route.routes)}
    </div>
  )
})
