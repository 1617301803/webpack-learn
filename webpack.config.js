const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: require.resolve('./src/globals.js'),
                use: 'imports-loader?this=>window'
            },
            {
                test: require.resolve('./src/globals.js'),
                use: 'exports-loader?file,parse=helpers.parse'
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '起步'
        }),
        new webpack.ProvidePlugin({
            _: 'lodash'
        })
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
};