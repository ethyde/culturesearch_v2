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
        
    }
}

export default FormAjax;