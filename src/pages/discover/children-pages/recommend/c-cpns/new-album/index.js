import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getNewAlbumsAction } from '../../store/actionCreator'

import { Carousel } from 'antd'
import ThemeHeaderRcm from '../../../../../../components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'
import './index.less'

export default memo(function NewAlbum() {
  const dispatch = useDispatch()
  const { newAlbums } = useSelector(
    state => ({
      newAlbums: state.getIn(['recommend', 'newAlbums'])
    }),
    shallowEqual
  )

  const albumRef = useRef()

  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])

  /* 轮播图布局思路:
      两个页面轮播: 2 page
      在page中添加一个个item
  */
  return (
    <div className="new-album-wrapper">
      <ThemeHeaderRcm title="新碟上架" />
      <div className="content">
        <div className="inner">
          <Carousel dots={false} ref={albumRef}>
            {[0, 1].map(item => {
              return (
                <div key={item} className="page">
                  {/* item * 5, (item+1) * 5   第一次遍历0  5  第二次遍历 5  10  */}
                  {newAlbums &&
                    newAlbums.slice(item * 5, (item + 1) * 5).map(cItem => {
                      return (
                        <AlbumCover
                          key={cItem.id}
                          info={cItem}
                          size={100}
                          width={118}
                          bgp="-570px"
                        >
                          {cItem.name}
                        </AlbumCover>
                      )
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="sprite_02 arrow arrow-left"
          onClick={e => albumRef.current.prev()}
        ></div>
        <div
          className="sprite_02 arrow arrow-right"
          onClick={e => albumRef.current.next()}
        ></div>
      </div>
    </div>
  )
})
