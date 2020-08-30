import React from 'react'
import { primaryRoute } from '../../routes/primary'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Main = styled.div`
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

const Picture = styled.div`
  margin-top: 10%;
  display: inline-block;
  margin-left: 20%;
  height: 150px;
  width: 150px;
  border-radius: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
`

const Details = styled.div`
  margin-top: 5%;
  color: white;
  text-align: center;
  margin-bottom: 20px;

  h2 {
    font-weight: 600;
    letter-spacing: 1px;
  }

  p {
    font-weight: 100;
    margin-top: -10px;
    letter-spacing: 2px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Menu = () => {
  return (
    <Main>
      <Picture>
        <Image
          src="https://avatars3.githubusercontent.com/u/34975209?s=460&u=9f3b0dc7de8d7a793d4b55909019077d2310a0f2&v=4"
          alt="Display"
        />
      </Picture>
      <Details>
        <h2>Sayan Mondal</h2>
        <p>Software Developer Engineer</p>
      </Details>
      <nav style={{ marginTop: '15%' }}>
        <ul>
          <Link to={primaryRoute.home}>
            <li>Home</li>
          </Link>

          <Link to={primaryRoute.cv}>
            <li>CV</li>
          </Link>

          <Link to={primaryRoute.portfolio}>
            <li>Portfolio</li>
          </Link>

          <br></br>

          <Link to={primaryRoute.blog}>
            <li>Blogs</li>
          </Link>

          <Link to={primaryRoute.talks}>
            <li>Talks</li>
          </Link>

          <Link to={primaryRoute.contact}>
            <li>Get in Touch</li>
          </Link>
        </ul>
      </nav>
    </Main>
  )
}

export { Menu }
