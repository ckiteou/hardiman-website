import React from 'react'
import { Link } from 'react-router'
import '../styles/nav.scss'

const Navbar = () => (
  <nav className="nav_bar">
    <Link className="nav_link" to="/">Home</Link>
    <Link className="nav_link" to="/">About</Link>
    <Link className="nav_link" to="/">Services</Link>
    <Link className="nav_link" to="/">Portfolio</Link>
    <Link className="nav_link" to="/">Contact</Link>
  </nav>
)

export default Navbar;
