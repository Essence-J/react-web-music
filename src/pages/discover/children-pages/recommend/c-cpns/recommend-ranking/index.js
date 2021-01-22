import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopListAction } from '../../store/actionCreator'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import TopList from '@/components/top-ranking'
import './index.less'

export default memo(function RecommendRanking() {
  const dispatch = useDispatch()
  const { upRanking = [], newRanking = [], originRanking = [] } = useSelector(
    state => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking'])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  }, [dispatch])

  return (
    <div className="ranking-wrapper">
      <ThemeHeaderRcm title="榜单" />
      <div className="ranking-info">
        <TopList info={upRanking} />
        <TopList info={newRanking} />
        <TopList info={originRanking} />
      </div>
    </div>
  )
})
