/**
 * webpack的工作流程
 * 
 */
 const fs = require('fs');
 const { SyncHook } = require('tapable')
class Compiler{
    constructor(options) {
        this.options = options;
        this.hooks = {
            run: new SyncHook(),
            done:new SyncHook()
        }
    }
    run() {
        let modules = [];
        let chunks = [];
        let files = [];
        this.hooks.run.call();// 触发run钩子执行
        // 根据配置中的entry找出所有的入口文件
        let entry = path.join(this.options.context, this.options.entry)
        // 从入口文件触发，调用所有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，
        // 再递归本步骤知道所有入口依赖的文件都经过了本步骤的处理;
        // 1. 读取模块内容
        // let sum = (a,b)=> a+b; let title = require('title')
        let entryContent = fs.readFileSync(entry, 'utf8');
        let entrySource = babelLoader(entryContent);
        // 模块module chunk代码块 file bundle 文件的关系
        let entryModule = { id: entry, source: entrySource };
        modules.push(entryModule)
        // 把入口模块的代码转成抽象语法树AST,分析里面的import 和require依赖
        let title = path.join(this.options.context, "./src/title.js")
        // 从入口文件触发，调用所有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，
        // 再递归本步骤知道所有入口依赖的文件都经过了本步骤的处理;
        // 1. 读取模块内容
        // let sum = (a,b)=> a+b; let title = require('title')
        let titleContent = fs.readFileSync(entry, 'utf8');
        let titleSource = babelLoader(titleContent);
        // 模块module chunk代码块 file bundle 文件的关系
        let titleModule = { id: entry, source: titleSource };
        modules.push(titleModule)
        // 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk
        let chunk = { name: 'main', modules };
        chunks.push(chunk)
        // 再把每个Chunk转换成一个单独的文件加入到输出列表
        let file = {
            file: this.options.output.filename,
            source: 
            `
              (function(){

              })()
            `
        }
        files.push(file)
        // 在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统
        let outputPath = path.jon(this.options.output.path,this.options.output.filename)
        fs.writeFileSync(outputPath, file.source, 'utf8')
        // 在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，
        // 并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果
        this.hooks.done.call();
    }
}
;
/**
 * 1.初始化参数：从配置文件和Shell语句中读取与合并参数，得出最终的参数；
 */
let options = require('./webpack.config');
// 开始编译：用上一步得到的参数初始化Compiler对象
let compiler = new Compiler(options);
// 加载所有配置的插件，执行对象的run方法开始执行编译
if (options.plugins && Array.isArray(options.plugins)) {
    for (const plugin of options.plugins) {
        plugin.apply(compiler)
    }
}