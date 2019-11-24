import React from 'react'
import onClickOutside from "react-onclickoutside";
import { about_me } from '../../data/home'
import '../../styles/services.scss'
import ServiceTiles from './ServiceTiles'

// class component for onClickOutside
class Services extends React.Component {
  render() {
    return (
      <div className="services_wrapper">
        <div className="services_text">
          <h3>A Header</h3>
          <div className="body">
            {about_me}
          </div>
        </div>
        <ServiceTiles/>
      </div>
    )
  }
}

export default onClickOutside(Services);
