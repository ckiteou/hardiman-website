import React from 'react';
import './App.css';

const App = ({children}) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">The Hardiman Website</h1>
    </header>
    {children}
  </div>
)

export default App;
