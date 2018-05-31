import React from 'react'
import Navbar from './components/home/Navbar'
import './styles/hardiman.scss'


const App = ({children}) => (
  <div className="hardiman_website">
    <header className="header">
      <Navbar/>
    </header>
    <div className="main">
      {children}
    </div>
  </div>
)

export default App;
