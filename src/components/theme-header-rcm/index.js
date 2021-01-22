import React, { memo } from 'react'
import propTypes from 'prop-types'
import spriteIcon from '../../assets/img/sprite_02.png';

import './index.less'

const ThemeHeaderRcm = props => {
  const { title, keywords, showIcon, right } = props

  return (
    <div
      className="rcm-header-wrapper"
      style={{
        paddingLeft: showIcon ? '34px' : '2px',
        background: showIcon ?` url(${spriteIcon}) -225px -156px no-repeat` : ''
      }}
    >
      <div className="rcm-header-left">
        <h2 className="hot-title">
          <a href="/discover/recommend" className="no-link hot-text">
            {title}
          </a>
        </h2>
        <ul className="keywords">
          {keywords.map(item => {
            return (
              <li className="item" key={item}>
                <a href="/">{item}</a>
                <span className="line">|</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="rcm-header-right">
        <span>{right}</span>
        {showIcon && <i className="icon"></i>}
      </div>
    </div>
  )
}

ThemeHeaderRcm.propTypes = {
  // title属性必填
  title: propTypes.string.isRequired,
  keywords: propTypes.array,
  showIcon: propTypes.bool,
  right: propTypes.any
}

ThemeHeaderRcm.defaultProps = {
  keywords: [],
  showIcon: true,
  right: '更多'
}

export default memo(ThemeHeaderRcm)
