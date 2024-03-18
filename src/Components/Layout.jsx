import React from 'react'
import Router from '../Routerfold/Router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <Header/>
    <div>
      <Router/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout
