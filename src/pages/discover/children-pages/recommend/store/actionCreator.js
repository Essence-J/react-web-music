import * as actionTypes from './actionTypes'
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getSettleSinger
} from '@/service/recommend.js'
import { getTopListDetail } from '@/service/toplist'

// 轮播图action
export const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  // 此处 res 的属性可根据log打印来判断
  topBanners: res.banners
})

// 热门推荐Action
export const changeHotRecommendsAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

// 新碟上架Action
export const changeNewAlbumsAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
  // newAlbums: res.monthData, // 新接口数据
})

//飙升榜单Action
export const changeUpRankingAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})
// 新歌榜单Action
export const changeNewRankingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})
// 原创榜单Action
export const changeOriginRankingAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})
// 入驻歌手Action
export const changeSettleSinger = res => ({
  type: actionTypes.CHANGE_SETTLE_SINGER,
  settleSinger: res.artists
})

// --------------------------------------------------------------
// 发送网络请求将结果传递给派发的Action中 (react-redux可以让该函数返回一个函数而不是返回一个对象: redux-thunk使用)
// 轮播图network request
// dispatch传递返回的函数目的是可能该getAction函数需要一些额外的参数
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      // console.log(res);
      dispatch(changeTopBannerAction(res))
    })
  }
}

// 热门推荐network request
export const getHotRecommendsAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendsAction(res))
    })
  }
}

// 新碟上架network request
export const getNewAlbumsAction = limit => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumsAction(res))
    })
  }
}

// 榜单详情 network
export const getTopListAction = idx => {
  return dispatch => {
    getTopListDetail(idx).then(res => {
      switch (idx) {
        case 19723756:
          dispatch(changeUpRankingAction(res))
          break
        case 3779629:
          dispatch(changeNewRankingAction(res))
          break
        case 2884035:
          dispatch(changeOriginRankingAction(res))
          break
        default:
      }
    })
  }
}

// 入驻歌手network request
export const getSettleSingerAction = limit => {
  return dispatch => {
    getSettleSinger(limit).then(res => {
      dispatch(changeSettleSinger(res))
    })
  }
}
