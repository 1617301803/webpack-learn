//import print from './print.js';
//import common from './common.js';

function getComponet() {
    return import ( /*webpackChunkName:'lodash'*/ 'lodash').then(_ => {
        var element = document.createElement('div');
        element.innerHTML = 'import';
        return element;
    }).catch(error => 'error');
}

getComponet().then(component => {
    document.body.appendChild(component);
});