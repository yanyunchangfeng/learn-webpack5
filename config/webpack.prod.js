const commonConfig = require('./webpack.common');
const path = require('path');
const webpack = require('webpack')
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(commonConfig, {
    devtool: 'cheap-module-source-map',
    mode: process.env.NODE_ENV,
    optimization: {
        // minimize: true,
        // minimizer: [new TerserPlugin(),new OptimizeCssAssetsPlugin()],
    },
    cache: {
        type: 'filesystem',// memory filesystem,  // 默认是在内存中存储
        cacheDirectory:path.resolve(__dirname,'../node_modules/.cache/webpack') // 默认缓存目录
    },
    module: {
        rules: [
            {
                test: /\.scss|css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
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
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        })
    ]
})
