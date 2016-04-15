import React from 'react';
import FormAjax from './form_ajax.js';

class FormComponent extends React.Component {

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
        this.state = {inputValue: ' '};
    }

    handleChange( e ) {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.handleChange.bind( this )} />
                <FormAjax url="pouet.json" />
            </div>
        );
    }

}

export default FormComponent;