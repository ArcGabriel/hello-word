import React, { Component } from 'react';
import logo from '../logo.svg';
import H1 from './H1';

const styles = {
    header: ({ backgroundColor }) => ({
        backgroundColor,
        /* backgroundColor: '#282c34', */
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    })
}

export default class CabeceraCssInlineDim extends Component {
    state = {
        backgroundColor: '#282c34'
    }

    cambiaColorHeader = () => {
        this.setState({ backgroundColor: '#555' });
    }

    manejaClick = () => {
        const{ miau, manejaClick } = this.props
        manejaClick(miau)
    }

    render() {
        const{ miau, manejaClick } = this.props
        const{ backgroundColor } = this.state

        return(
            <header onClick={this.cambiaColorHeader} style={styles.header({ backgroundColor })}>
                <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
                <H1>{miau}</H1>
            </header>
        );
    }
}