import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, world !
        </p>
        <p>
          Ce projet a pour but de montrer le fonctionnement de Cloudflare.
        </p>
      </header>
    </div>
  );
}

export default App;
