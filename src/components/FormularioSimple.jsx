import React, { Component } from 'react';


export default class FormularioSimple extends Component {
    state = {}

    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log('prevenido !')
    }
 
    render() {
        console.log(this.state)
        return(
            <form onSubmit={this.handleSubmit}>
                <input name='nombre' onChange={this.handleChange} />
                <input name='apellido' onChange={this.handleChange} />
                <input type='submit' value='Enviar' />
            </form>
        )
    }
}