class SyncWaterfallHook {
    // 瀑布流执行 将函数的返回结果依次
    tasks:any[]
    constructor(args:string[]) {
        this.tasks = []
    }
    tap(name:string, fn:Function) {
        this.tasks.push(fn)
    }
    call(...arg:any[]) {
        const [first, ...others] = this.tasks;
        let ret = first(...arg)
        others.reduce((prev, currentFn) => {
            return currentFn(prev)
        }, ret)
    }
}

class Lesson {
    hooks: any;
    constructor() {
        this.hooks = {
            arch: new SyncWaterfallHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tap('angular', (name:string) => {
            console.log(name, 'angular')
            return '学习完angular ok'
        })
        this.hooks.arch.tap('react', (data:string) => {
            console.log(data, 'react')
            return '学习完reactOk'
        })
        this.hooks.arch.tap('electron', (data:string) => {
            console.log(data, 'electron')
        })
    }
    start() {
        this.hooks.arch.call('yanyunchangfeng')
    }
}

let lesson = new Lesson()
lesson.tap()
lesson.start()
export {SyncWaterfallHook}