import React from 'react'
import Header from './header'
import Footer from './footer'
import Menu from '../menu/menu'
import layoutStyles from '../styles/layout.module.css'

const Layout = ({ children, header }) => {
  return (
    <div>
      <Menu />
      <div className={layoutStyles.main}>
        <Header>{header}</Header>
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
