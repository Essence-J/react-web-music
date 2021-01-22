import React, { memo } from 'react'
import TopBanners from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'
import HotArtist from './c-cpns/hot-artist'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import './index.less'

export default memo(function Recommend() {
  return (
    <div className="recommend-wrapper">
      {/* 轮播图 */}
      <TopBanners />
      <div className="content w980">
        <div className="recommend-left">
          {/* 热门推荐 */}
          <HotRecommend />
          {/* 新碟上架 */}
          <NewAlbum />
          {/* 榜单 */}
          <RecommendRanking />
        </div>
        <div className="recommend-right">
          {/* 登录 */}
          <UserLogin />
          {/* 入驻歌手 */}
          <SettleSinger />
          {/* 热门主播 */}
          <HotArtist />
        </div>
      </div>
    </div>
  )
})
