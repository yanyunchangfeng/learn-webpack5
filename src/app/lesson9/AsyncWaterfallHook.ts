class AsyncWaterfallHook {
    // 异步钩子（串行）并行 需要等待所有并发的异步事件执行后再执行回调方法
    // 同时发送多个请求
    // 注册方法 分为tap注册 tapAsync
    tasks:any[]
    constructor(args:string[]) {
        this.tasks = []
    }
    tapAsync(name:string, fn:Function) {
        this.tasks.push(fn)
    }
    callAsync(...args:any[]) {
        let finalCallBack = args.pop();
        let index = 0;
        let next = (err?:any, data?:string) => {
            let task = this.tasks[index];
            if (!task) return finalCallBack()
            if (index === 0) {
                task(...args, next)
            } else {
                task(data, next)
            }
            index++
        }
        next()
    }
}

class Lesson {
    hooks: any;
    constructor() {
        this.hooks = {
            arch: new AsyncWaterfallHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tapAsync('angular', (name:string, cb:Function) => {
            setTimeout(() => {
                console.log(name, 'angular')
                cb(null, 'angular')
            }, 1000)
        })
        this.hooks.arch.tapAsync('react', (data:string, cb:Function) => {
            setTimeout(() => {
                console.log(data, 'react')
                cb(null, 'react')
            }, 1000)
        })
    }
    start() {
        this.hooks.arch.callAsync('yanyunchangfeng', () => {
            console.log('end')
        })
    }
}

let lesson = new Lesson()
lesson.tap()
lesson.start()

export { AsyncWaterfallHook}