const commonConfig = require('./webpack.common');
const path = require('path')
const { merge } =  require('webpack-merge');
module.exports = merge(commonConfig, {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    cache: {
        // 不要使用cnpm 来安装模块 会有问题
        type: 'memory',// memory filesystem,  // 默认是在内存中存储
        // cacheDirectory:path.resolve(__dirname,'../node_modules/.cache/webpack') // 默认缓存目录
    },
    watch:true, // 增量编译
    devServer:{
        port: 3001,
        open:true
    }
})
