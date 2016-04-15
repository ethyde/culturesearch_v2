
import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<App/>, document.getElementById('app'));