import _ from 'lodash';
import print from './print';

function component() {
    // var element = document.createElement('div');
    // var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // btn.innerHTML = 'Click me and check the console HA';
    // btn.onclick = e =>
    //     import ( /*webpackChunkName:"print"*/ './print').then(module => {
    //         var print = module.default;
    //         print();
    //     });

    // element.appendChild(btn);

    // return element;
}

console.log('hash');
document.body.appendChild(component());