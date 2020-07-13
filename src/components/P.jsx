import React, { Component } from 'react';

export default class P extends Component {
    render() {
        const { children } = this.props
        
        return (
            <p className="App-intro">
                {children}
            </p>
        )
    }

}