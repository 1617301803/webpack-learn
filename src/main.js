import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

class Button extends Component {
    render() {
        return <div>Hello React</div>;
    }
}

render(<Button />, document.body);