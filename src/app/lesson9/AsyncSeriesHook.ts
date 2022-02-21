
class AsyncSeriesHook {
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
        let finalCallBack = args.pop()
        let index = 0
        let next = () => {
            if (index === this.tasks.length) return finalCallBack()
            let task = this.tasks[index++]
            task(...args, next)
        }
        next()
    }
}

class Lesson {
    hooks: any;
    constructor() {
        this.hooks = {
            arch: new AsyncSeriesHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tapAsync('angular', (name:string, cb:Function) => {
            setTimeout(() => {
                console.log(name, 'angular')
                cb()
            }, 1000)
        })
        this.hooks.arch.tapAsync('react', (name:string, cb:Function) => {
            setTimeout(() => {
                console.log(name, 'react')
                cb()
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

export {AsyncSeriesHook}