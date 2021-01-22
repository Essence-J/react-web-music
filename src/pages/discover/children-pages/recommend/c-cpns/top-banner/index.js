// 1. 第三方库
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

// 2. 功能性函数
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreator'

// 3. 导入的组件
import { Carousel } from 'antd'
import './index.less'

export default memo(function TopBanner() {
  // 组件内state
  const [currentIndex, setCurrentIndex] = useState(0)

  // 这个 hook 返回 Redux store 的 分发(dispatch) 函数的引用
  const dispatch = useDispatch()

  // 从store中拿需要的数据，类比于mapStateToProps
  const { topBanners } = useSelector(
    state => ({
      // topBanners: state.get('recommend').get('topBanners')
      // 获取redux-reducer转换成Immutable对象的深层state
      topBanners: state.getIn(['recommend', 'topBanners'])
    }),
    shallowEqual
  )

  // 其他Hook
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  // 传入子组件的函数最好都用useCallback包裹，防止不必要的渲染
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他的逻辑代码 memoize
  const bgImage =
    topBanners &&
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <div
      className="banner-wrapper"
      style={{
        background: `url(${bgImage})center center/6000px`
      }}
    >
      <div className="banner w980">
        <div className="banner-left">
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map(item => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
        </div>
        <a
          href="https://music.163.com/#/download"
          target="_blank"
          rel="noreferrer"
          className="banner-right"
        ></a>
        <div className="banner-control">
          <button
            className="btn"
            onClick={e => bannerRef.current.prev()}
          ></button>
          <button
            className="btn"
            onClick={e => bannerRef.current.next()}
          ></button>
        </div>
      </div>
    </div>
  )
})
