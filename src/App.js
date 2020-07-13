import React, { Component } from 'react';
import Cabecera from './components/Cabecera';
import P from './components/P';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  state = {
    miau: 'Bienvenido a miau'
  }

  cambiarTextoDelEstado = () => {
    this.setState({ miau: 'Hola mundo' });
  }
  manejaClick = texto => {
    alert(texto)
  }
  render() {
    const { miau } = this.state
    return (
      <div className="App">
        <Cabecera miau={miau} manejaClick={this.manejaClick} />
        <P>
          {miau}
        </P>
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
