import _ from 'lodash';
import print from './print';
import './index.css';

export class a{
    constructor(){
        var a = 5;
    }
}


function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack8'], ' ');

    return element;
}

document.body.appendChild(component());

console.log('index update -------------   ----------');

if (module.hot) {
    // module.hot.accept('./print', () => {
    //     console.log('print');
    // });

    module.hot.accept();
}