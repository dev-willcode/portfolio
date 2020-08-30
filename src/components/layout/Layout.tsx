import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../../styles'

// Components
import Footer from './Footer'
import Header from './Header'
import { Menu } from '../menu'

interface Ilayout {
  children: React.ReactNode
  header: string
}

const Container = styled.div`
  margin-left: 25%; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0;
`

const Layout: React.FC<Ilayout> = ({ children, header }) => {
  return (
    <ThemeProvider theme={theme()}>
      <Menu />
      <Container>
        <Header>{header}</Header>
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export { Layout }
