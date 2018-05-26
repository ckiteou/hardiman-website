import React from 'react'
import { Link } from 'react-router'
import navlinks from '../data/navbar.json'
import '../styles/nav.scss'

const Navbar = () => (
  <nav>
    <div className="nav_bar">
      {
        navlinks.map(i =>
          <Link key={i} className="nav_link" to="/">{i}</Link>)
      }
      <h3 className="mobile">07079 000 612</h3>
    </div>
  </nav>
)

export default Navbar;
