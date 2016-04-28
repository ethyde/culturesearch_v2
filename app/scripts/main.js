'use strict'

// "fetch" global
require('whatwg-fetch');

import React from 'react';

// import only the render function of react-dom using ES2015 destructuring
import { render } from 'react-dom';

// Custom, personal modules
import Form from './modules/FormComponent.js';

// Constantes
const root = document.getElementById('app');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {inputValue: 'pouet'};
    }

    render () {
        return (
            <div>
                <p> Hello React ! </p>
                <Form />
            </div>
        );
    }
}

render(<App/>, root);