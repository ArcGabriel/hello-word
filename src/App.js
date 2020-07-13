import React, { Component } from 'react';
import Cabecera from './components/Cabecera';
import P from './components/P';
import Pextend from './components/Pextend';
import './App.css';


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
        <Pextend onClick={this.cambiarTextoDelEstado}>
          {miau}
        </Pextend>
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
