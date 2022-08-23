<p align="center">
    <img width="300" src="src/assets/img/yanyunchangfeng.png">
</p>

## 介绍

你好，我是[燕云长风](https://yanyunchangfeng.github.io)。大漠穷秋于 2019-03-16 21:22 赠此笔名。  
寓意：结合李白著名的边塞诗《关山月》取【燕云长风】—— 长风几万里，吹度玉门关。

## 这是 webpack5 新特性的学习实践

1. [持久化缓存](./config/webpack.dev.js)
2. [资源模块](./config/webpack.common.js)
3. [URIs](./src/app/lesson1/index.ts)
4. [moduleIds 和 chunkIds 的优化](./config/webpack.common.js)
5. [nodejs polyfill](./config/webpack.prod.js) [crypto-js](./src/app/lesson3/index.ts)
6. [更强大的 tree shaking](./config/webpack.common.js) [sideEffects](./package.json) [PURE magic comment](./src/app/lesson11/index.ts)
7. [TopAwait React.lazy](./src/app/lesson8/index.ts)
8. [webpack5 use Web Workers without worker-loader](./src/app/lesson10/index.ts)
9. [webpack5 use asyncWebAssembly without wasm-loader](./src/app/lesson12/index.ts) [webpack asyncWebAssembly](./config/webpack.common.js)

## webpack tapable Hook

1. [HookMap](./src/app/lesson9/index.ts)
2. [SyncHook](./src/app/lesson9/SyncHook.ts)
3. [SyncBailHook](./src/app/lesson9/SyncBailHook.ts)
4. [SyncLoopHook](./src/app/lesson9/SyncLoopHook.ts)
5. [SyncWaterfallHook](./src/app/lesson9/SyncWaterfallHook.ts)
6. [AsyncSeriesHook](./src/app/lesson9/AsyncSeriesHook.ts)
7. [AsyncSeriesBailHook](./src/app/lesson9/AsyncSeriesBailHook.ts)
8. [AsyncParallelHook](./src/app/lesson9/AsyncParallelHook.ts)
9. [AsyncParallelBailHook](./src/app/lesson9/AsyncParallelBailHook.ts)
10. [AsyncWaterfallHook](./src/app/lesson9/AsyncWaterfallHook.ts)

# webpack 的工作流程

[webpack flow](webpack.flow.js)  
[webpack md](webpack.md)

# 如何对 bundle 体积进行监控和分析

[webpack-bundle-analyzer](./config/webpack.common.js)

# 如何提高 webpack 的构建速度

[speed-measure-webpack-plugin](./config/webpack.common.js)
[module.noParse](./config/webpack.common.js)  
[IgnorePlugin](./config/webpack.common.js)  
[friendly-errors-webpack-plugin 日志优化](./config/webpack.common.js)  
[thread-loader 多进程处理](./config/webpack.common.js)
[UnusedWebpackPlugin](./config/webpack.prod.js)

# hash

[hash,chunkhash,contenthash](./webpack.md)  
[source map](./webpack.md)

## 我的个人博客

- [燕云长风](https://yanyunchangfeng.github.io)

## 我参与的系列项目

1. [NiceFish](https://gitee.com/mumu-osc/NiceFish)：美人鱼，这是一个微型 Blog 系统，前端基于 Angular7.0 + PrimeNG7.1.0。（GVIP 码云最有价值的开源项目 5075 ☆)
2. [NiceFish-React](https://gitee.com/mumu-osc/NiceFish-React)：这是 React 版的实现，和 NiceFish Angular 版本保持风格一致。采用 React Hooks 16.8.3 版本，使用 TypeScript、Ant Design 组件库以及 Bootstrap v4.2.1 开发。 (13 ☆)
3. [OpenWMS-Frontend](https://gitee.com/mumu-osc/OpenWMS-Frontend)：OpenWMS 项目前端基于 Angular 7.0 + PrimeNG 7.1.0。 (已推荐 227 ☆)
4. [nicefish-spring-cloud](https://gitee.com/mumu-osc/nicefish-spring-cloud)：这是 NiceFish 的服务端代码，基于 SpringCloud。已经完成了一些基本的功能，如 SpringSecurity+OAuth2+JWT 实现 SSO，文章、用户、评论等的分页查询等。如果你需要与这个后端代码进行对接，请检出本项目的 for-spring-cloud 分支。 (已推荐 155 ☆)

## 我的社交主页

1. [燕云长风知乎](https://zhihu.com/people/hbxyxuxiaodong)
2. [燕云长风知乎专栏](https://zhuanlan.zhihu.com/yanyunchangfeng)
3. [燕云长风 github](https://github.com/yanyunchangfeng)
4. [燕云长风 gitee](https://gitee.com/yanyunchangfeng)
5. [燕云长风 twitter](https://twitter.com/yanyunchangfeng)
6. [燕云长风 medium](https://medium.com/@yanyunchangfeng)

## 开源许可证

MIT
