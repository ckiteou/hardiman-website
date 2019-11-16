import React from 'react'
import onClickOutside from "react-onclickoutside";
import '../../styles/services.scss'
import ServiceTiles from './ServiceTiles'

// class component for onClickOutside
class Services extends React.Component {
  render() {
    return (
      <div className="services_wrapper">
        <div className="services_text">
          <h3>A Header</h3>
          <p>
            Lorem Ispum Lorem Ispum Lorem Ispum Lorem.
          </p>
          <p>
            Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum.
          </p>
          <p>
            Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem IspumIspum Lorem Ispum Lorem Ispum Lorem Ispum Lorem IspumIspum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum.
          </p>
          <p>
            Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum.
          </p>
        </div>
        <ServiceTiles/>
      </div>
    )
  }
}

export default onClickOutside(Services);
