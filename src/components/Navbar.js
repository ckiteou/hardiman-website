import React from 'react'
import { Link } from 'react-router'
import navlinks from '../data/navbar.json'
import '../styles/nav.scss'

const Navbar = () => (
  <nav className="nav_bar">
    {
      navlinks.map(i =>
        <Link key={i} className="nav_link" to="/">{i}</Link>)
    }
  </nav>
)

export default Navbar;
