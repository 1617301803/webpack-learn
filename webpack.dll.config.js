const path = require('path');
const webpakck = require('webpack');
console.log( path.resolve(__dirname, 'dist'));

module.exports = {
    entry: {
        lodash: ['lodash']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, 'dist'),
        library: '__dll__[name]'
    },
    plugins: [
        new webpakck.DllPlugin({
            name: '__dll__[name]',
            path: path.join(__dirname, 'dist', '[name].manifest.json')
        }),
    ],
}