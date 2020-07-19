import React, { Component } from 'react';

const styles = {
    h1: () => ({
        color: '#f00',
        size: 'calc(8px + 2vmin)'
    })
}

export default class H1 extends Component {
    state = {

    }

    render() {
        return (
            <h1 {...this.props} style={styles.h1()}/>
        )
    }

}
