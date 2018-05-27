import React from 'react';
import { personal_quote } from '../../data/home'
import Carousel from './Carousel'
import jonathon from '../../images/home/jonathon.png'
import '../../styles/home.scss';
import '../../styles/hardiman.scss'

const Home = () => (
  <main className="home">
    <Carousel/>
    <div className="container">
      <div className="quote_container">
        <span className="quote">{personal_quote}</span>
      </div>
      <div className="image_container">
        <img
          className="profile_image"
          src={jonathon} /*placeholder image*/
          alt="Jonathon Hardiman"
        />
      </div>
    </div>
  </main>
)

export default Home;
