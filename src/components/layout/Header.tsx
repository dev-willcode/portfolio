import React from 'react'
import styled from 'styled-components'

interface Iheader {
  children: string
}

const Appbar = styled.div``

const Header: React.FC<Iheader> = ({ children }) => {
  return <Appbar>{children}</Appbar>
}

export default Header
