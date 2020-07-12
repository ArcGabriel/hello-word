import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Cabecera extends Component {
    render() {
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Bienvenido a ReactJS</h1>
            </header>
        );
    }
}

