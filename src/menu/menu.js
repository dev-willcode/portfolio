import React from "react"
import { primaryRoute } from "../routes/primary"
import { Link } from "gatsby"
import menuStyles from "../styles/sidebar.module.css"

const Menu = () => {
  return (
    <div className={menuStyles.main}>
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
    </div>
  )
}

export default Menu
