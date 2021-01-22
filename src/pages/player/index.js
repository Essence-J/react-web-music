import React, { memo } from 'react'
import SongInfo from './child-pages/song-info'
import SongComment from './child-pages/song-comment'
import './index.less'

// 歌曲详情页面
export default memo(function SongDetail() {
  return (
    <div className="song-detail-wrapper">
      <div className="content w980">
        <div className="song-left">
          <SongInfo />
          <SongComment />
        </div>
        <div className="song-right">
          <h2>SongInclude 包含音乐</h2>
          <h2>SongRelevant 相关音乐</h2>
          <h2>客户端下载</h2>
        </div>
      </div>
    </div>
  )
})
