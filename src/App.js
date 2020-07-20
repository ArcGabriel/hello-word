import React, { Component } from 'react';
import axios from 'axios';
import FormularioSimple from './components/FormularioSimple'

class App extends Component{
  constructor(){
    super()
    // GET, POST, PUT, PATCH, DELETE
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => console.log( data ))
    // POST
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: 'Gabriel Gamboa',
      username: 'ggamboa',
    })
      .then(({ data }) => console.log( data ))
  }

  render() {
    return (
      <div>
        <FormularioSimple />
      </div>
    )
  }
}

export default App
