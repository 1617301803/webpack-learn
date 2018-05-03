const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: [
            'webpack-hot-middleware/client',
            './src/index.js'
        ],
        other: [
            'webpack-hot-middleware/client',
            './src/other.js'
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },

    plugins: [
        //new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '起步'
        }),
        new webpack.HotModuleReplacementPlugin()
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
                //exclude:/node_module/
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};