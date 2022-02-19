
class HookMap{
    _map;
    createHookFactory;
    constructor(createHookFactory:Function) {
        this._map = new Map()
        this.createHookFactory = createHookFactory
    }
    get(key:string) {
        return this._map.get(key);
    }
    for(key:string) {
        let hook = this.get(key);
        if (hook) return hook
        let newHook = this.createHookFactory();
        this._map.set(key, newHook)
        return newHook
    }
}