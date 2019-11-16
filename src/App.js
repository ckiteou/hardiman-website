import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/home/Main'
import './styles/hardiman.scss'

const Footer = () => (
  <footer>
    { /* placeholder for footer shit */ }
  </footer>
)

const App = () => (
  <div className="hardiman_website">
    <header>
      <Navbar/>
    </header>
    <div className="wrapper">
      <main>
        <Main/>
      </main>
    </div>
    <footer>
      <Footer/>
    </footer>
  </div>
)

export default App;
