import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './routes'
import store from './store'
import { Spin } from 'antd'

import Header from '@/components/header'
import Footer from '@/components/footer'
import AppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Suspense fallback={<Spin />}>{renderRoutes(routes)}</Suspense>
        <Footer />
        <AppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
