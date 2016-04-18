'use strict'

// "fetch" global
require('whatwg-fetch');

import React from 'react';

// import only the render function of react-dom using ES2015 destructuring
import { render } from 'react-dom';

// Custom, personal modules
import FormComponent from './modules/form_input.js';

class App extends React.Component {
    render () {
        return (
            <div>
                <p> Hello React ! </p>
                <FormComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));