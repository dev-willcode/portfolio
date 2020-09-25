import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  text-align: center;
  background: yellow;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  padding: 1rem 0;
  width: 75%;
`

const Footer = () => {
  return <FooterWrapper>2020 @ Sayan Mondal</FooterWrapper>
}

export default Footer
