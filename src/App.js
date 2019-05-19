import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/home/Home'
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
        <Home/>
      </main>
    </div>
    <footer>
      <Footer/>
    </footer>
  </div>
)

export default App;
