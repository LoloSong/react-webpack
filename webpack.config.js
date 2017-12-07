const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.config.js');


const publicConfig = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux'],
        app: [
            "babel-polyfill",
            path.join(__dirname, 'src/index.js')
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].[hash:5].js',
        chunkFilename: 'js/[name].[chunkhash:5].js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['dist'])
    ],
}

module.exports = merge(commonConfig, publicConfig);