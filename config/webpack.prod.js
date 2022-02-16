const commonConfig = require('./webpack.common');
const path = require('path');
const webpack = require('webpack')
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin }= require("clean-webpack-plugin");
module.exports = merge(commonConfig, {
    devtool: 'cheap-module-source-map',
    mode: 'production',
    cache: {
        type: 'filesystem',// memory filesystem,  // 默认是在内存中存储
        cacheDirectory:path.resolve(__dirname,'../node_modules/.cache/webpack') // 默认缓存目录
    },
    // resolve: {
        // fallback: {
        //     crypto: require.resolve('crypto-browserify'), // webpack5 默认移除了nodejs的polyfill 需要的要的话需要配置
        //     stream: require.resolve('stream-browserify'),
        //     buffer:require.resolve('buffer')
        // }
        // fallback: {
        //     crypto: false,
        //     stream: false,
        //     buffer:false
        // }
    // }
    plugins: [
        new webpack.BannerPlugin("Copyright By yanyunchangfeng"),
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: "[name].css",
        //     chunkFilename: "[name].css"
        // })
    ]
})
