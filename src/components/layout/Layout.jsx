import React from 'react'
import Ads from '../ads/Ads'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../routers/Routers'

const Layout = () => {
  return <>
    <Ads />
    <Header />
    <div>
        <Routers />
    </div>
    <Footer />
  </>
}

export default Layout