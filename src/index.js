import a from './a';
1;
setTimeout(() => {

    import('./async').then(module => {
        console.log(module);
    });
}, 1000);
