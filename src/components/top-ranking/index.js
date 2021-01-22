import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils.js'

import {
  getSongDetailAction,
  changeFirstLoad
} from '@/pages/player/store/actionCreator'
import { useAddPlaylist } from '../../hooks/change-music'
import { message } from 'antd'
import './index.less'

export default memo(function TopRanking(props) {
  // ranking-list排行列表效果需求:
  // 鼠标放到一行item身上hover效果 播放按钮和添加播放列表和收藏的icons
  // props/state
  const { info } = props
  const { tracks = [] } = info

  const dispatch = useDispatch()
  const { playList } = useSelector(
    state => ({
      playList: state.getIn(['player', 'playList'])
    }),
    shallowEqual
  )

//   useEffect(() => {
//     dispatch(getSongDetailAction())
//   }, [dispatch])

  // other handle
  // 播放音乐
  const playMusic = (e, item) => {
    // 阻止超链接跳转
    e.preventDefault()
    // 派发action 歌曲详情
    dispatch(getSongDetailAction(item.id))
    // 不是首次加载,播放音乐
    dispatch(changeFirstLoad(false))
    //#region 设置本地存储(暂不做)
    // localPlayList.push(item.id)
    // localStorage.setItem('localPlayList', JSON.stringify(localPlayList))
    //#endregion
  }

  // 添加到播放列表(使用自定义hook)
  const addPlaylist = useAddPlaylist(playList, message)

  return (
    <div className="top-ranking-wrapper">
      <div className="ranking-header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <div className="image_cover ">{info.name}</div>
        </div>
        <div className="tit">
          <div>
            <h3>{info.name}</h3>
          </div>
          <div className="btn">
            <a
              href="/discover/recommend"
              className="no-link sprite_02 text-indent play"
            >
              播放
            </a>
            <a
              href="/discover/recommend"
              className="no-link sprite_02 text-indent favourite"
            >
              收藏
            </a>
          </div>
        </div>
      </div>
      <div className="ranking-list">
        {tracks &&
          tracks.length > 0 &&
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="number">{index + 1}</div>
                <a
                  href="/play"
                  className="song-name text-nowrap"
                  onClick={e => playMusic(e, item)}
                >
                  {item.name}
                </a>
                <div className="oper">
                  <a
                    href="/discover/recommend"
                    className="sprite_02 btn play"
                    onClick={e => playMusic(e, item)}
                  >
                    {item.name}
                  </a>
                  <a
                    href="/discover/recommend"
                    className="sprite_icon2 btn addto"
                    onClick={e => addPlaylist(e, item.id)}
                  >
                    {item.name}
                  </a>
                  <a href="/play" className="no-link sprite_02 btn favourite">
                    {item.name}
                  </a>
                </div>
              </div>
            )
          })}
      </div>
      <div className="ranking-footer">
        <a href="/all" className="no-link show-all">
          查看全部&gt;
        </a>
      </div>
    </div>
  )
})
