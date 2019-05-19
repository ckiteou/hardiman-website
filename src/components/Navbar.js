import React from 'react'
import navlinks from '../data/navbar.json'
import '../styles/nav.scss'

const Navbar = () => (
  <nav>
    <div className="nav_bar">
      <h1 className="logo">LOGO</h1>{/*needs updating*/}
      {
        navlinks.map(i =>
          <a
            key={i.name}
            className="nav_link"
            href={i.link}
          >
            {i.name}
          </a>
        )
      }
    </div>
  </nav>
)

export default Navbar;
