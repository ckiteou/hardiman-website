import React from 'react'
import navlinks from '../data/navbar.json'
import '../styles/nav.scss'

const Navbar = () => (
  <nav>
    <div className="nav_bar">
      <div className="logo">JMHGardens</div>
      <div className="nav_links_wrapper">
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
      <div className="contact_number">
        <i className="fas fa-phone-volume"/>
        &nbsp; 07932 771 158
      </div>
    </div>
  </nav>
)

export default Navbar;
