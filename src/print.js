import _ from 'lodash';
import print from './print';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'print2'], ' ');

    return element;
}

document.body.appendChild(component());

