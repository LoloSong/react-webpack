const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

commonConfig = {
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader']
            })
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 3072
                }
            }]
        }]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.js',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash:5].css',
            allChunks: true
        }),
    ],
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            // components: path.join(__dirname, 'src/components'),
            actions: path.join(__dirname, 'src/redux/actions'),
            utils: path.join(__dirname, 'src/utils'),
            static: path.join(__dirname, 'src/static')
        }
    },
}

module.exports = commonConfig;