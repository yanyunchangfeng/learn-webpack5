class SyncLoopHook {
    // 同步遇到某个不返回undefined的监听函数会执行多次
    tasks:any[]
    constructor(args:string[]) {
        this.tasks = []
    }
    tap(name:string, fn:Function) {
        this.tasks.push(fn)
    }
    call(...arg:any[]) {
        this.tasks.forEach((task) => {
            let ret;
            do {
                ret = task(...arg)
            } while (ret !== undefined)
        })
    }
}

class Lesson {
    hooks: any;
    count: number;
    constructor() {
        this.count = 0
        this.hooks = {
            arch: new SyncLoopHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tap('angular', (name:string) => {
            console.log(name, 'angular')
            return ++this.count === 3 ? undefined : '继续学习angular'
        })
        this.hooks.arch.tap('react', (name:string) => {
            console.log(name, 'react')
            // return '一直学习react'
        })
        this.hooks.arch.tap('electron', (name:string) => {
            console.log(name, 'electron')
        })
    }
    start() {
        this.hooks.arch.call('yanyunchangfeng')
    }
}

let lesson = new Lesson()
lesson.tap()
lesson.start()

export {
    SyncLoopHook
}