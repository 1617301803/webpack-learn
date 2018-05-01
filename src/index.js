import _ from 'lodash';
import print from './print';
import './index.css';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack3'], ' ');

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print', () => {
        console.log('print');
    });
}