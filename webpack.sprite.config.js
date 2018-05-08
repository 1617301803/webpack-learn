const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
   // mode: 'development',
    entry: {
        index: [
            './src/sprite.js'
        ]
    },
    devtool: 'source-map',

    plugins: [
        //new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '起步'
        }),
        // new SpritesmithPlugin({
        //     src: {
        //         cwd: path.index(__dirname, 'src/image'),
        //         glob: '*.png'
        //     },
        //     target: {
        //         image: path.resolve(__dirname, 'dist/sprite.png'),
        //         css: path.resolve(__dirname, 'dist/sprites.css')
        //     },
        //     apiOptions: {
        //         cssImageRef: "~sprite.png"
        //     }
        // })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sprite-loader'
                ]
            },
            {
                test: /\.png$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_module/
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};