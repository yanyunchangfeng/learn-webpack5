1. Loader 和 Plugin 的不同?

- Loader 直译为加载器。Webpack 将一切文件视为模块，但是 webpack 原生是只能解析 js 文件，如果想将其他文件也打包的话，就会用到 loader，所以 Loader 的作用是让 webpack 拥有了加载和解析非 JavaScript 文件的能力
- Plugin 直译为插件，Plugin 可以扩展 webpack 的功能，让 webpack 具有更多的灵活性。在 Webpack 运行的生命周期中会广播出许多事件,Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果

2. webpack 的构建流程是什么？

- 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
- 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；确定入口：根据配置中的 entry 找出所有的入口文件
- 编译模块：从入口文件触发，调用所有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理;
- 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
  输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
- 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统
  - 在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果

初始化参数---> {从配置文件和 Shell 语句中读取与合并参数，得出最终的参数}
开始编译---> {用上一步得到的参数初始化 Compiler 对象 加载所有配置的插件，执行对象的 run 方法开始执行编译 确定入口：根据配置中的 entry 找出所有的入口文件}

编译模块---> {从入口文件出发，调用所有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理}

完成编译---> {在经过上面步骤使用 Loader 编译完所有模块后 得到了每个模块被翻译后的最终内容以及它们之间的依赖关系 }

输出资源---> {根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表}

3.webpack 中的 hash、chunkhash、contenthash 区别？

- 文件指纹
- 打包后输出的文件名和后缀
- hash 一般是结合 CDN 缓存来使用，通过 webpack 构建之后，生成对应文件名自动带上对应的 MD5 值，如果文件内容改变的话，那么对应文件哈希值也会改变，对应的 HTML 引用的 URL 地址也会改变，触发 CND 从源服务器上拉取对应数据，进而更新本地缓存。

  指纹占位符
  | 占位符名称 | 含义|
  |----------|-----|
  | ext | 资源后缀名|
  | name | 文件名称|
  | path | 文件的相对路径|
  | folder | 文件所在的文件夹|
  | hash | 每次 webpack 构建时生成一个唯一的 hash 值|
  | chunkhash | 根据 chunk 生成 hash 值，来源于同一个 chunk，则 hash 值就一样|
  | contenthash| 根据内容生成 hash 值，文件内容相同 hash 值就相同|

4. source map 的类型
   | 类型 | 定义|
   |-----|----|
   |source-map |原始代码 最好的 sourcemap 质量有完整的结果，但是会很慢 |
   |eval-source-map |原始代码 同样道理 但是最高的质量和最低的性能 |
   |eval-cheap-module--source-map |原始代码（只有行内） 同样道理 但是最高的质量和更低的性能 |
   |eval|生成代码（行内）每个模块都被 eval 执行，并且 sourcemap 作为 eval 的一个 dataurl |
   |cheap-source-map |转换代码（行内）生成的 sourcemap 没有列映射，从 loaders 生成的 sourcemap 没有被使用|
   |cheap-module-source-map |原始代码（只有行内）与上面一样除了每行特点的从 loader 中进行映射|

看似配置项很多，其实只有五个关键字 eval、source-map、cheap、module 和 inline 的任意组合

| 关键字     | 含义                                                                               |
| ---------- | ---------------------------------------------------------------------------------- |
| eval       | 使用 eval 包裹模块代码                                                             |
| source-map | 产生 map 文件                                                                      |
| cheap      | 不包含列信息（关于列信息的解释下面会有详细介绍）也不包含 loaders 的 sourcemap      |
| module     | 包含 loader 的 sourcemap（比如 jsx to js，babel 的 sourcemap），否则无法定义源文件 |
| inline     | 将.map 作为 DataURI 嵌入，不单独生成 map 文件                                      |

4.2 如何选择 source map 的类型

- 首先在源代码的列信息是没有意义的，只要有行信息就能完整的建立打包前后代码之间的依赖关系。因此，不管是开发环境还是生产环境都会增加 cheap 来忽略模块打包后的列信息关联
- 不管是生产环境还是开发环境，我们都需要定位 debug 到最原始的资源，比如定位错误到 jsx，ts 的原始代码，而不是经编译后的 js 代码，所以不会去掉 module 属性
- 需要生成 map 文件，所以得有 source-map 属性
- 总结
  - 开发环境使用：eval-cheap-module--source-map
  - 生产环境使用：cheap-module-source-map

5. module chunk bundle

- module: 就是 js 的模块化 webpack 支持 commonJS、ES6 等模块化规范，简单来说就是你通过 import 语句引入的代码

- chunk: chunk 是 webpack 根据功能拆分出来的，包含三种情况

* 你的项目入口(entry)
* 通过 import()动态引入的代码
* 通过 splitChunks 拆分出来的代码

- bundle: bundle 是 webpack 打包之后的各个文件，一般就是和 chunk 是一对一的关系，bundle 就是对 chunk 进行编译压缩打包等处理之后的产出
