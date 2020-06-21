import React from "react"
import { Link } from "gatsby"
import { primaryRoute } from "../routes/primary"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={primaryRoute.home}>Home</Link>
          </li>
          <li>
            <Link to={primaryRoute.cv}>CV</Link>
          </li>
          <li>
            <Link to={primaryRoute.portfolio}>Portfolio</Link>
          </li>
          <li>
            <Link to={primaryRoute.blog}>Blogs</Link>
          </li>
          <li>
            <Link to={primaryRoute.talks}>Talks</Link>
          </li>
          <li>
            <Link to={primaryRoute.contact}>Get in Touch</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
