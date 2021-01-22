import React from 'react'
import { Redirect } from 'react-router-dom'

const Discover = React.lazy(() => import('@/pages/discover'))
const Album = React.lazy(() => import('@/pages/discover/children-pages/album'))
const Recommend = React.lazy(() =>
  import('@/pages/discover/children-pages/recommend')
)
const Ranking = React.lazy(() =>
  import('@/pages/discover/children-pages/ranking')
)
const Songs = React.lazy(() => import('@/pages/discover/children-pages/songs'))
const Djradio = React.lazy(() =>
  import('@/pages/discover/children-pages/djradio')
)
const Artist = React.lazy(() =>
  import('@/pages/discover/children-pages/artist')
)

const SongDetail = React.lazy(() => import('@/pages/player'))
const Friend = React.lazy(() => import('@/pages/friend'))
const Mine = React.lazy(() => import('@/pages/mine'))

// const Search = React.lazy(() => import('@/pages/search'))
// const Single = React.lazy(() => import('@/pages/search/children-pages/single'))
// const Singer = React.lazy(() => import('@/pages/search/children-pages/singer'))
// const SearchAlbum = React.lazy(() =>
//   import('@/pages/search/children-pages/album')
// )
// const Songlist = React.lazy(() => import('@/pages/song-detail'))

// import Discover from '@/pages/discover'
// import Album from '../pages/discover/children-pages/album'
// import Recommend from '../pages/discover/children-pages/recommend'
// import Ranking from '../pages/discover/children-pages/ranking'
// import Songs from '../pages/discover/children-pages/songs'
// import Djradio from '../pages/discover/children-pages/djradio'
// import Artist from '../pages/discover/children-pages/artist'
// import SongDetail from '../pages/player'

// import Friend from '@/pages/friend'
// import Mine from '@/pages/mine'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />
      },
      { path: '/discover/recommend', component: Recommend },
      { path: '/discover/ranking', component: Ranking },
      { path: '/discover/album', component: Album },
      { path: '/discover/djradio', component: Djradio },
      { path: '/discover/artist', component: Artist },
      { path: '/discover/songs', component: Songs },
      { path: '/discover/song', component: SongDetail }
    ]
  },
  {
    path: '/mine',
    exact: true,
    component: Mine
  },
  {
    path: '/friend',
    exact: true,
    component: Friend
  }
]

export default routes
