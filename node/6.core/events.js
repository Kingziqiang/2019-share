function EventEmitter() {
    this._events = Object.create(null);
}
// {'失恋':[]}
EventEmitter.prototype.on = function (eventName, callback) {
    // 判断实例是否有此属性 
    if (!this._events) this._events = Object.create(null);
    if (eventName !== 'newListener') {
        let listeners = this._events['newListener'];
        if (listeners) {
            // 如果有newLister就触发newListener对应的事件
            this.emit('newListener', eventName)
        }
    }
    let stack = this._events[eventName] || [];
    stack.push(callback);
    this._events[eventName] = stack;
}
EventEmitter.prototype.once = function (eventName,callback) {
    // 先绑定 绑定完触发后 去删除掉
    const one = (...args) => {
        callback(...args); // 原函数 ，原函数执行后 将自己删除掉即可
        this.off(eventName,one);
    }
    one.l = callback
    this.on(eventName, one);
}
// 删除数组中的某一项
EventEmitter.prototype.off = function (eventName,callback) {
    if (this._events[eventName]){
        this._events[eventName]  = this._events[eventName].filter(item => {
            // 如果绑定的one 和要关闭 的回调一样我也要删除掉这个函数
            return item !== callback && item.l !== callback
        })
    }
}
EventEmitter.prototype.emit = function (eventName, ...args) {
    if (this._events[eventName]) {
        this._events[eventName].forEach(fn => {
            fn(...args);
        });
    }
}
module.exports = EventEmitter;