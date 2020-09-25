import React from 'react'
import Header from './header'
import Footer from './footer'
import Menu from '../menu/menu'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles'

const Main = styled.div`
  margin-left: 25%; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0;
`

const Layout = ({ children, header }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Menu />
      <Main>
        <Header>{header}</Header>
        {children}
        <Footer />
      </Main>
    </ThemeProvider>
  )
}

export default Layout
