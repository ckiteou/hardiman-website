import React, { Component } from 'react';
import Carousel from './Carousel'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import '../../styles/home.scss'
import '../../styles/hardiman.scss'

configureAnchors({offset: -70, scrollDuration: 800})

class Section extends Component {
  render() {
    return (
      <div className="section_container">
        <div className="title-divider">
          <hr/><h2>{this.props.title}</h2><hr/>
        </div>
        {this.props.children}
      </div>
    )
  }
}

// exract to seperate files
const About = () => (
  <div className="text" style={{height: '600px', padding: '20px'}}>About</div>
)

const Services = () => (
  <div className="text" style={{height: '600px', padding: '20px'}}>Services</div>
)

const Contact= () => (
  <div className="text" style={{height: '600px', padding: '20px'}}>Contact</div>
)

const Home = () => (
  <div className="home">
    <ScrollableAnchor id={'home'}>
      <Carousel/>
    </ScrollableAnchor>
    <ScrollableAnchor id={'about'}>
      <Section title="About">
        <About/>
      </Section>
    </ScrollableAnchor>
    <ScrollableAnchor id={'services'}>
      <Section title="Services">
        <Services/>
      </Section>
    </ScrollableAnchor>
    <ScrollableAnchor id={'contact'}>
      <Section title="Contact">
        <Contact/>
      </Section>
    </ScrollableAnchor>
  </div>
)

export default Home;
