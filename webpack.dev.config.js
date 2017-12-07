const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            "babel-polyfill",
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:5].js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        host: 'localhost',
        port: 1010,
        hot: true
    }
}

module.exports = merge(commonConfig, devConfig);