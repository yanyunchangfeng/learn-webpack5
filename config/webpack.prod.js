const commonConfig = require('./webpack.common');
const path = require('path')
const { merge } =  require('webpack-merge');
module.exports = merge(commonConfig, {
    devtool: 'cheap-module-source-map',
    mode: 'production',
    cache: {
        type: 'filesystem',// memory filesystem,  // 默认是在内存中存储
        cacheDirectory:path.resolve(__dirname,'../node_modules/.cache/webpack') // 默认缓存目录
    },
    devServer:{
        port:3001,
        open: true,
        contentBase:path.join(process.cwd(),'dist')
    }
})
