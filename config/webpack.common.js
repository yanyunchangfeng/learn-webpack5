const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    context: path.join(process.cwd(),'src','app'),
    entry:'./index.ts',
    output: {
        path: path.join(process.cwd(),'dist'),
        filename: '[name].bundle.js',
        chunkFilename: "[name].bundle.js"
    },
    resolve:{
        extensions:['.js','.ts']
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
                test:/\.ts$/,
                loader:'ts-loader'
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
            }
        ]
    },
    plugins:[
       new htmlWebpackPlugin({
           template:path.join(process.cwd(),'src/index.temp.html'),
           favicon:path.join(process.cwd(),'src/assets/img/yanyunchangfeng.png'),
       })
    ] 
}