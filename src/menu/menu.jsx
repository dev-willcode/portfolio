import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../components/image-fetch/Avatar'
import { primaryRoute } from '../routes/primary'
import { useTheme } from '../styles'

const Sidebar = styled.div`
  height: ${(props) => props.theme.screens.lg ? '30%' : '100%'};
  width: ${(props) => props.theme.screens.lg ? '100%' : '25%'};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #272727;
  overflow-x: hidden;
  padding-top: ${(props) => props.theme.screens.lg ? '0' : '20px'};
`

const DisplayPicture = styled.div`
  margin-top: ${(props) => props.theme.screens.lg ? '2%' : '10%'};
  display: flex;
  justify-content: center;
  width: ${(props) => props.theme.screens.lg ? '10%' : '100%'};
  margin-left: ${(props) => props.theme.screens.lg ? '45%' : '0'};
`

const PersonalDetails = styled.div`
  margin-top: ${(props) => props.theme.screens.lg ? '1rem' : '5%'};
  color: white;
  text-align: center;
  margin-bottom: 20px;
`

const MenuItem = styled(GatsbyLink)`
  text-decoration: none;
  color: white;
`

const MenuList = styled.li`
  padding: 2% 0;
  padding-left: 3%;

  :hover {
    background: rgb(187, 187, 187);
    color: black;
    font-weight: 600;
  }
`

const Menu = () => {

  const {lg} = useTheme().screens;
  
  return (
    <Sidebar>
      <DisplayPicture>
        <Avatar />
      </DisplayPicture>
      <PersonalDetails>
        <h2 style={{ fontWeight: '600', letterSpacing: '1px' }}>
          Sayan Mondal
        </h2>
        <p
          style={{
            fontWeight: '100',
            marginTop: '-10px',
            letterSpacing: '2px',
          }}
        >
          Software Developer Engineer
        </p>
      </PersonalDetails>
      <nav style={{ marginTop: '15%' }}>
        <ul style={{ listStyle: 'none' }}>
          <MenuItem to={primaryRoute.home}>
            <MenuList>Home</MenuList>
          </MenuItem>

          <MenuItem to={primaryRoute.cv}>
            <MenuList>CV</MenuList>
          </MenuItem>

          <MenuItem to={primaryRoute.portfolio}>
            <MenuList>Portfolio</MenuList>
          </MenuItem>

          <br></br>

          <MenuItem to={primaryRoute.blog}>
            <MenuList>Blogs</MenuList>
          </MenuItem>

          <MenuItem to={primaryRoute.talks}>
            <MenuList>Talks</MenuList>
          </MenuItem>

          <MenuItem to={primaryRoute.contact}>
            <MenuList>Get in Touch</MenuList>
          </MenuItem>
        </ul>
      </nav>
    </Sidebar>
  )
}

export default Menu
