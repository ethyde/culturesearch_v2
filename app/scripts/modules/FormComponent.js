'use strict'

import React from 'react';

class Form extends React.Component {
    
    constructor(props) {
        super(props);
        // this.state = {likesCount : 0};
        this.state = { data: [] };
        this.onLike = this.onLike.bind(this);
    }

    onLike () {
        // let newLikesCount = this.state.data;
        // this.setState({data: newLikesCount});
        
        fetch('http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json')
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(err => console.error(this.props.url, err.toString()));
    }

    render() {
        return (
            <div>
                Likes : <span>{this.state.data}</span>
                <div>
                    <button 
                        onClick={this.onLike}>Like Me</button>
                </div>
            </div>
        );
    }

}

export default Form;