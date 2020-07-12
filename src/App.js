import React, { Component } from 'react';
import Cabecera from './components/Cabecera';
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
  render(){
    const { miau } = this.state
    const texto = 'Bienvenido miau'
    const guau = 'Bienvenido guau'
    return (
      <div className="App">
        <Cabecera miau={miau} manejaClick={this.manejaClick} />
        <Cabecera miau={guau} manejaClick={this.manejaClick} />
        <p onClick={this.cambiarTextoDelEstado} className="App-intro">
          {miau}
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
