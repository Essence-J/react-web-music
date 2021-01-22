import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { getHotRecommendsAction } from '../../store/actionCreator'
import SongsCover from '@/components/songs-cover'

import './index.less'

export default memo(function HotRecommend() {
  const dispatch = useDispatch()
  const { hotRecommends } = useSelector(
    state => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends'])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
    // console.log(hotRecommends);
  }, [dispatch])

  return (
    <div className="hot-recommend-wrapper">
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        showIcon={true}
      />
      <div className="recommend-list">
        {hotRecommends &&
          hotRecommends.map(item => {
            return (
              <SongsCover key={item.id} info={item} className="recommend-list">
                {item.name}
              </SongsCover>
            )
          })}
      </div>
    </div>
  )
})
