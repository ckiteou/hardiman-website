import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import onClickOutside from "react-onclickoutside";
import '../../styles/services.scss'

// extract to data
const services = [
  {
    image: "https://images.unsplash.com/photo-1499856666482-0667da148d3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1791&q=80",
    title: 'Garden Design',
    key: 'design',
    details: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum\nLorem Ipsum,Lorem Ipsum, Lorem Ipsum"
  },
  {
    image: "https://images.unsplash.com/photo-1417036631532-ae3fc6ce32f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    title: 'Garden Maintenance',
    key: 'maintenance',
    details: "Lorem Ipsum,Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum\nLorem Ipsum,Lorem Ipsum, Lorem Ipsum"
  },
  {
    image: "https://images.unsplash.com/photo-1528092744838-b91de0a10615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    title: 'Garden Clearance',
    key: 'clearance',
    details: "Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,Lorem Ipsum, Lorem Ipsum\nLorem Ipsum,Lorem Ipsum, Lorem Ipsum"
  }
]

const ServiceCardFront = ({image, title, active}) => (
  <div className={!active ? "tile font" : "tile font not_active" }>
    <img src={image} alt="service"/>
    <p>{title}</p>
  </div>
)

const ServiceCardBack = ({title, className}) => (
  <div className={`tile active ${className}`}>
    <p className="medium">{title}</p>
    <p className="small">boo</p> {/* update with copy */}
  </div>
)

const Description = ({details}) => (
  <div>
    <p>{details}</p>
  </div>
)

class ServiceTiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearance: false,
      maintenance: false,
      design: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(service) {
    ['design', 'maintenance', 'clearance'].forEach((s) => {
      if (s !== service) {
        this.setState({[s]: false})
      }
    })
    this.setState(prevState => ({[service]: !this.state[service]}))
  }
  handleClickOutside() {
    this.setState({
      clearance: false,
      maintenance: false,
      design: false
    })
  }
  render() {
    return (
      <div>
        <div className="service_tile_wrapper">
          {
            services.map((service, i) => (
              <ReactCardFlip key={i} isFlipped={this.state[service.key]} flipDirection="horizontal">
                <div key="front" onClick={() => this.handleClick(service.key)}>
                  <ServiceCardFront
                    image={service.image}
                    title={service.title}
                    active={
                      this.state.clearance ||
                      this.state.design ||
                      this.state.maintenance
                    }
                  />
                </div>
                <div key="back" onClick={() => this.handleClick(service.key)}>
                  <ServiceCardBack title={service.title} className={service.key}/>
                </div>
              </ReactCardFlip>
            ))
          }
        </div>
        <div className={
          this.state.clearance ?
          "description clearance" :
          this.state.maintenance ?
          "description maintenance" :
          this.state.design ?
          "description design" :
          "description none"
        }>
        {
          this.state.clearance ?
          <Description details={services[0].details}/> :
          this.state.maintenance ?
          <Description details={services[1].details}/> :
          this.state.design ?
          <Description details={services[2].details}/> :
          <div></div>
        }
        </div>
      </div>
    )
  }
}

export default onClickOutside(ServiceTiles);
