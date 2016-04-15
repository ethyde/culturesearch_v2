'use strict'

import React from 'react';

class FormAjax extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    loadData(){

        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(err => console.error(this.props.url, err.toString()))

    }
    
    render() {
        return (
            <button url="pouet.json" onSubmit={this.loadData.bind( this )}>ok</button>
        );
    }
}

export default FormAjax;