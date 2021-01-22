import request from './request'

// 轮播图片
export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

// 热门推荐
export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 首页下的新碟上架
export function getNewAlbums(limit) {
  return request({
    url: '/album/newest',
    params: {
      limit
    }
  })
}

// 入驻歌手
export function getSettleSinger(limit) {
  return request({
    url: '/artist/list',
    params: {
      limit
    }
  })
}