import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import Services from '../services/Services'
import Contact from '../Contact'
import '../../styles/main.scss'
import '../../styles/hardiman.scss'

class Home extends Component {
  render() {
    return (
      <div className="home"></div>
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
  <div>
    <ScrollableAnchor id={'home'}>
      <Home/>
    </ScrollableAnchor>
    <div className="main">
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
  </div>
)

export default Main;
