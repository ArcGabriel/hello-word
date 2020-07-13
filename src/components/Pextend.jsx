import React, { Component } from 'react';

export default class Pextend extends Component {
    render() {    
        return (
            <p {...this.props} className="App-intro" />
        )
    }

}