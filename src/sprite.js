import './index.css';

function component(className) {
    var element = document.createElement('div');
    element.className = className;
    return element;
}

document.body.appendChild(component('icon1'));
document.body.appendChild(component('icon2'));

console.log('index update -------------   ----------');