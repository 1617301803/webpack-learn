import print from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    btn.innerHTML = 'click';
    btn.onclick = print;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());