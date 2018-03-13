//import print from './print.js';
//import common from './common.js';

async function getComponet() {

    var element = document.createElement('div');
    const _ = await
    import ( /*webpackChunkName:"lodash"*/ 'lodash');
    element.innerHTML = 'import';
    return element;
}

getComponet().then(component => {
    document.body.appendChild(component);
});