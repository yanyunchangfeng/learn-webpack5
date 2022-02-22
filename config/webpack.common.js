const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports={
    context: path.join(process.cwd(),'src','app'),
    entry: {
        main: './index.ts',// 可以配置多个
        modal:'./modal.ts'// 多页应用入口
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
    resolve: {
        modules:[path.resolve('node_modules')],// 解析第三方包
        extensions: ['.js', '.ts', '.css', '.less','.json'],// 文件后缀名 先后顺序查找
        mainFields: ['style', 'main'],// eg: bootstrap 先找package.json 的style字段 没有的话再找main字段
        // mainFiles:['index.js','index.ts'],// 入口文件的名字 默认是index.js 
        alias: { // 别名  注意tsconfig.json˙中的paths也要对应配置
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
           template: path.join(process.cwd(), 'src/index.temp.html'),
           filename: 'index.html',
           chunks:['main'], // 指定包含的代码块
           favicon:path.join(process.cwd(),'src/assets/img/yanyunchangfeng.png'),
       }),
       new htmlWebpackPlugin({
           template: path.join(process.cwd(), 'src/index.temp.html'),
           filename: 'modal.html',
           chunks:['modal'],
           favicon:path.join(process.cwd(),'src/assets/img/yanyunchangfeng.png'),
       }),
        new webpack.DefinePlugin({
           AUTHOR:JSON.stringify('yanyunchangfeng')
       })
    ] 
}