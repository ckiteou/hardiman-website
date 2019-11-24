import React from 'react';
import { personal_quote, about_me } from '../data/home'
import '../styles/about.scss';

const About = () => (
  <div className="about_wrapper">
    <div className="section">
      <div className="profile_image"/>
      <div className="quote_container">
        <div className="quote">
          {personal_quote}
        </div>
      </div>
    </div>
    <div className="section">
      <div className="another_quote">
        {about_me}
      </div>
      <div className="another_image"/>
    </div>
  </div>
)

export default About
