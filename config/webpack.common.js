const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports={
    context: path.join(process.cwd(),'src','app'),
    entry: {
        main:'./index.ts'// 可以配置多个
    },
    output: {
        path: path.join(process.cwd(),'dist'),
        filename: '[name].bundle.js',//入口代码块文件名的生成规则
        chunkFilename: "[name].bundle.js"//非入口模块的生成规则
    },
    optimization: {
        // usedExports:true,// 标记使用到的导出
        // moduleIds: 'natural', named  deterministic size // 模块名称的生成规则 deterministic 生产模式默认值
        // chunkIds:'natural' // named  deterministic size //代码块名称的生成规则
    },
    resolve:{
        extensions: ['.js', '.ts'],
        alias: {
            src: path.resolve(__dirname, '../src'),
        }
    },
    experiments: {
        topLevelAwait: true, // 此处为新增配置
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
            },
            {
                test:/\.tsx?$/,
                loader: 'ts-loader',
                // sideEffect:false
            },
            {
                test: /\.png$/, 
                type:'asset/resource' //资源模块 对标file-loader 
                
            },
            {
                test: /\.ico$/,
                type:'asset/inline' // 对标url-loader 模块大小<limit base64字符串
            },
            {
                test: /\.txt$/,
                type:'asset/source' // 对标raw-loader
            },
            {
                test: /\.jpg$/,
                type: 'asset', // 不加/ 相当于自动配置 模块大小大于配置走 resource 否则走 source
                parser: {
                    dataUrlCondition: {
                        maxSize:4*1024
                    }
                }
            },
            {
                test: /\.css/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
       new htmlWebpackPlugin({
           template:path.join(process.cwd(),'src/index.temp.html'),
           favicon:path.join(process.cwd(),'src/assets/img/yanyunchangfeng.png'),
       }),
        new webpack.DefinePlugin({
           AUTHOR:JSON.stringify('yanyunchangfeng')
       })
    ] 
}