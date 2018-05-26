import React from 'react';
import { home } from '../data/home'
import Carousel from './Carousel'
import '../styles/home.scss';
import '../styles/hardiman.scss'

const Home = () => (
  <main className="home">
    <Carousel/>
    <div className="text_container">
      <p className="text">{home.introduction}</p>
    </div>
  </main>
)

export default Home;
