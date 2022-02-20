
class SyncHook {// 钩子是同步的
    taps: any[];
    // 类的构造函数可以接受一个可选 参数，参数是一个参数名的字符串数据
    constructor(args:string[]) {// args => ['name']  
        this.taps = []
    }
    tap(name:string, fn:Function) { //注册
        this.taps.push(fn)
    }
    call(...args:any[]) { // 触发
        this.taps.forEach(tap => tap(...args))
    }
}

class Lesson {
    hooks;
    constructor() {
        this.hooks = {
            arch: new SyncHook(['name'])
        }
    }
    tap() { // 注册监听函数
        this.hooks.arch.tap('angular', (name:string) => {
            console.log(name, 'angular')
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
    SyncHook
}