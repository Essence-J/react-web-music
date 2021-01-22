import React, { memo, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { headerLinks } from '@/common/local-data'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
// import 'antd/dist/antd';

import './index.less'

export default memo(function Header() {
  const [isRedirect, setIsRedirect] = useState(false)
  const [value, setValue] = useState('')

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink
          key={item.title}
          to={item.link}
          className="header-item"
          activeClassName="link-active"
        >
          <em>{item.title}</em>
          <i className="icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} key={item.title} className="header-item">
          {item.title}
        </a>
      )
    }
  }

  const inputRef = useRef()
  // (根据当前焦点状态设置input焦点)
  // useEffect(() => {
  //   // 获取焦点
  //   if (focusState) inputRef.current.focus()
  //   // 失去焦点
  //   else inputRef.current.blur()
  // }, [focusState])

  return (
    <div className="header-wrapper">
      <div className="content w1100">
        <div className="header-left">
          <h1>
            <a href="#/" className="logo sprite_01">
              网易云音乐
            </a>
          </h1>
          <div className="header-group">
            {headerLinks.map((item, index) => {
              return showSelectItem(item, index)
            })}
          </div>
          {/* <NavLink to="/">发现音乐</NavLink>
          <NavLink to="/mine">我的音乐</NavLink>
          <NavLink to="/friend">发现朋友</NavLink> */}
        </div>
        <div className="header-right">
          <div className="search-wrapper">
            <Input
              ref={inputRef}
              className="search"
              placeholder="音乐/歌手"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  )
})
