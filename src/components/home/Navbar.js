import React from 'react'
import { Link } from 'react-router'
import navlinks from '../../data/navbar.json'
import '../../styles/nav.scss'

export const ContactDetails = () => (
  <div className="contact_container">
    <p className="email">Email: jon_hardiman@xxxxx.com</p> {/*needs updating*/}
    <p className="number">Tel: 01235 666 xxx</p> {/*needs updating*/}
  </div>
)

const Navbar = () => (
  <nav>
    <div className="nav_bar">
      <h1 className="logo">LOGO</h1>{/*needs updating*/}
      {
        navlinks.map(i =>
          <Link key={i} className="nav_link" to="/">{i}</Link>)
      }
      <ContactDetails/>
    </div>
  </nav>
)

export default Navbar;
