const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const Plugin = require('./bin/plugins/Plugin');

module.exports = {
    mode: 'development',
    entry: {
        index:[
            './src/index.js'
        ],
        other:[
            './src/other.js'
        ]
    },
    devtool: 'source-map',

    plugins: [
        //new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '起步',
            filename:'index.html'
        }),
        new Plugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?minimize'
                ]
            },
            {
                test:/\.js$/,
                use:[
                    //'emptyLoader.js',
                    'babel-loader'
                ],
                exclude:/node_module/
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolveLoader:{
        modules:['node_modules','./bin/loaders']
    }
};