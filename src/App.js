import React from 'react';
import './App.css';
import Maps from './Maps.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Maps />
        <p>
          Welcome!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
