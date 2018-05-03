import _ from 'lodash';
import test from './test';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'print14'], ' ');

    return element;
}

document.body.appendChild(component());


console.log('print update ------------------  -----');

