const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index:[
            './src/index.js'
        ]
    },
    devtool: 'source-map',

    plugins: [
        //new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '起步'
        }),
        new webpack.DllReferencePlugin({
            manifest: require(path.join(__dirname, 'dist', 'lodash.manifest.json'))
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.js$/,
                use:[
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
    }
};