const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        main: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devServer: {
        contentBase: './dist',
        //hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ManifestPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new HtmlWebpackPlugin({
            title: 'Hello',
            template: 'index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: process.env.NODE_ENV === 'production'
        })
        //new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].[chunkhash].js',
        //chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
};