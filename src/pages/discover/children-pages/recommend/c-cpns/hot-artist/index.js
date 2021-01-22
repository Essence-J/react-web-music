import React, { memo } from 'react'

import { hotRadios } from '@/common/local-data.js'

import ArtistHeaderLine from '../artist-hot-composition/artist-header-line'
import HotCoverInfo from '../artist-hot-composition/hot-cover-info'

import './index.less'

export default memo(function HotArtist() {
  return (
    <div className="hot-artist-wrapper">
      <ArtistHeaderLine titleSlot="热门主播" />
      <div className="artist-container">
        {hotRadios.map(item => {
          return <HotCoverInfo key={item.picUrl} info={item} />
        })}
      </div>
    </div>
  )
})
