import React, { Component } from 'react';
import Cabecera from './components/Cabecera';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  manejaClick = texto => {
    alert(texto)
  }
  render(){
    const miau = 'Bienvenido miau'
    const guau = 'Bienvenido guau'
    return (
      <div className="App">
        <Cabecera miau={miau} manejaClick={this.manejaClick} />
        <Cabecera miau={guau} manejaClick={this.manejaClick} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn_React
        </a>
      </div>
    )
  }
}

export default App;
