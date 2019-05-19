import React from 'react';
import { personal_quote } from '../../data/home'
import jonathon from '../../images/home/jonathon.png'
import '../../styles/about.scss';

const About = () => (
  <div className="quote_image_container">
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
)

export default About;
