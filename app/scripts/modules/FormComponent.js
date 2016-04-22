'use strict'

import React from 'react';

class FormButton extends React.Component {

    constructor(props) {
        super(props);
        this.content = { data: [] };
        this.loadData = this.loadData.bind( this );
    }

    loadData() {

        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
            .catch(err => console.error(this.props.url, err.toString()));

        console.log(this.content);

    }

    render() {
        return (
            <button onClick={this.loadData}>ok</button>
        );
    }
}

class FormInput extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {likesCount : 0};
    //     this.onLike = this.onLike.bind(this);
    // }

    // onLike () {
    //     let newLikesCount = this.state.likesCount + 1;
    //     this.setState({likesCount: newLikesCount});
    // }

    // render() {
    //     return (
    //         <div>
    //             Likes : <span>{this.state.likesCount}</span>
    //             <div>
    //                 <button onClick={this.onLike}>Like Me</button>
    //             </div>
    //         </div>
    //     );
    // }

    constructor(props) {
        super(props);
        this.state = {inputValue: ''};
    }

    handleChange( e ) {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <input
                type='text'
                value={this.state.inputValue}
                ref="inputVal"
                onChange={this.handleChange.bind( this )} />
        );
    }

}

class Form extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FormInput />

                <FormButton 
                    url={`http://www.omdbapi.com/?t=${this.refs.inputVal}&y=&plot=short&r=json`} />
            </div>
        );
    }

}

export default Form;