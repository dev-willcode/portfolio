import React from "react"
import { primaryRoute } from "../routes/primary"
import { Link } from "gatsby"
import menuStyles from "../styles/sidebar.module.css"

const Menu = () => {
  return (
    <div className={menuStyles.main}>
      <div className={menuStyles.displayPicture}>
        <img
          src={
            "https://media-exp1.licdn.com/dms/image/C5603AQGKeX4pes3Zpw/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=JMWcnUmjlJDJlRIPd0nPFP1htv_T5X2UUwVsZSsDNDo"
          }
          alt="Display"
        />
      </div>
      <div className={menuStyles.details}>
        <h2>Sayan Mondal</h2>
        <p>Software Developer Engineer</p>
      </div>
      <nav className={menuStyles.menu}>
        <ul>
          <Link className={menuStyles.menuItem} to={primaryRoute.home}>
            <li className={menuStyles.menuList}>Home</li>
          </Link>

          <Link className={menuStyles.menuItem} to={primaryRoute.cv}>
            <li className={menuStyles.menuList}>CV</li>
          </Link>

          <Link className={menuStyles.menuItem} to={primaryRoute.portfolio}>
            <li className={menuStyles.menuList}>Portfolio</li>
          </Link>

          <br></br>

          <Link className={menuStyles.menuItem} to={primaryRoute.blog}>
            <li className={menuStyles.menuList}>Blogs</li>
          </Link>

          <Link className={menuStyles.menuItem} to={primaryRoute.talks}>
            <li className={menuStyles.menuList}>Talks</li>
          </Link>

          <Link className={menuStyles.menuItem} to={primaryRoute.contact}>
            <li className={menuStyles.menuList}>Get in Touch</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
