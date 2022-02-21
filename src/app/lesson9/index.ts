import { SyncHook, HookMap } from 'tapable'
// import 'src/app/lesson9/SyncHook'
// import 'src/app/lesson9/SyncBailHook'
// import 'src/app/lesson9/SyncWaterfallHook'
// import 'src/app/lesson9/SyncLoopHook'
// import 'src/app/lesson9/AsyncSeriesHook';
// import 'src/app/lesson9/AsyncSeriesBailHook';
// import 'src/app/lesson9/AsyncParallelHook';
// import 'src/app/lesson9/AsyncWaterfallHook';
import 'src/app/lesson9/AsyncParallelBailHook';
const map = new HookMap(() => new SyncHook(['name']));
map.for('key1').tap('plugin1', (name) => {
      console.log(1,name)
})
map.for('key1').tap('plugin2', (name) => {
      console.log(2,name)
})

let hook = map.get('key1');
hook?.call('yanyunchangfeng')