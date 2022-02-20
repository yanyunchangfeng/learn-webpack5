
class SyncBailHook { // Bail 是保险的意思 只要任何一个监听函数的返回非undefined值的时候会停止调用后续的回调
    tasks:any[]
    constructor(args:string[]) {
        this.tasks = []
    }
    tap(name:string, fn:Function) {
        this.tasks.push(fn)
    }
    call(...arg:any[]) {
        let ret; // 当前函数的返回值
        let index = 0 // 当前要先执行第一个
        do {
            ret = this.tasks[index++](...arg)
        }
        while (ret === undefined && index < this.tasks.length)
    }
}

class Lesson {
    hooks: any;
    constructor() {
        this.hooks = {
            arch: new SyncBailHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tap('angular', (name:string) => {
            console.log(name, 'angular')
            return '想停止学习'
        })
        this.hooks.arch.tap('react', (name:string) => {
            console.log(name, 'react')
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
    SyncBailHook
}