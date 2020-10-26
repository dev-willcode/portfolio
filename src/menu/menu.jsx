import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../components/image-fetch/Avatar';
import { primaryRoute } from '../routes/primary';

const Sidebar = styled.div`
  height: 100%;
  width: 25%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #272727;
  overflow-x: hidden;
  padding-top: 20px;
`

const DisplayPicture = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
`

const PersonalDetails = styled.div`
  margin-top: 5%;
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
