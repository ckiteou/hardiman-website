import React, {useState } from 'react'
import '../styles/services.scss'


const Tile = ({image, title}) => (
  <div className="tile">
    <img
      src={image}
      alt="service"
    />
    <p>{title}</p>
  </div>
)

const Service = ({toggleShowService, service, setService}) => {
  return (
    <div
    >
      <h3>{service.title}</h3>
      <ul>
      {
        service.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))
      }
      </ul>
      <button
        onClick={() => {
          toggleShowService(false);
          setService({});
        }}
      >
        Back to all services
      </button>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1499856666482-0667da148d3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1791&q=80",
      title: 'Garden Design',
      details: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1417036631532-ae3fc6ce32f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      title: 'Garden Maintenance',
      details: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1528092744838-b91de0a10615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      title: 'Garden Clearance',
      details: [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum"
      ]
    }
  ]
  const [showService, toggleShowService] = useState(false);
  const [service, setService] = useState({})
  return (
    <div className="services_wrapper">
    {
    !showService ?
    <div>
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
      <div className="service_tile_wrapper">
        {
          services.map((service, i) => (
            <div
              key={i}
              onClick={() => {
                toggleShowService(true);
                setService(service);
              }}
            >
              <Tile image={service.image} title={service.title}/>
            </div>
          ))
        }
      </div>
    </div> :
    <Service toggleShowService={toggleShowService} service={service} setService={setService}/>
    }
    </div>
  )
}

export default Services;
