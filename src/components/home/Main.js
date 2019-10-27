import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import Services from '../Services'
import Contact from '../Contact'
import '../../styles/home.scss'
import '../../styles/hardiman.scss'

class Home extends Component {
  render() {
    return (
      <img src={'./images/watering.jpg'} style={{width: '100%', height: 'auto'}} alt="Watering Garden"/>
    )
  }
}

// exract to seperate files
const About = () => (
  <div className="text" style={{height: '600px', padding: '20px'}}>About</div>
)

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

const Main = () => (
  <div className="home">
    <ScrollableAnchor id={'home'}>
      <Home/>
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

export default Main;
