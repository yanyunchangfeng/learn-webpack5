class AsyncParallelBailHook {
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
        let finalCallBack = args.pop() // 拿到最终的执行函数
        let index = 0;
        let done = (err:any) => {
            if(err) return finalCallBack() //只要任意一个回调有返回值那么直接就结束回调 后面的任务同时继续执行 
            index++;
            if (index === this.tasks.length) {
                finalCallBack()
            }
        }
        this.tasks.forEach(task => {
            task(...args, done)
        })

    }
}

class Lesson {
    hooks:any
    constructor() {
        this.hooks = {
            arch: new AsyncParallelBailHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tapAsync('angular', (name:string, cb:Function) => {
            setTimeout(() => {
                console.log(name, 'angular')
                cb('学完angular后直接结束')
            }, 1000)
        })
        this.hooks.arch.tapAsync('react', (name:string, cb:Function) => {
            setTimeout(() => {
                console.log(name, 'react')
                cb()
            }, 1000)
        })
        this.hooks.arch.tapAsync('webpack', (name:string, cb:Function) => {
            setTimeout(() => {
                console.log(name, 'webpack')
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
export { AsyncParallelBailHook}