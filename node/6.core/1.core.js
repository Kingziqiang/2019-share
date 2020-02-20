// node基于事件的 发布订阅的模块
// vue $emit $on一样的
const EventEmitter = require('./events');
const util = require('util')
// 希望自己可以写一个类来使用这个模块中原型的方法
// 继承公共的
function Girl() {

}
// Girl.prototype.__proto__ = EventEmitter.prototype;
// ES6
// Object.setPrototypeOf(Girl.prototype,EventEmitter.prototype); // es6

util.inherits(Girl, EventEmitter);
let girl = new Girl;
// {'失恋':[fn]}
girl.on('newListener', function (type) {
    process.nextTick(()=>{
      girl.emit(type, '谁')
    })
})
let fn1 = function (who) { //once {'失恋',[]}
    console.log(who, '哭');
}
girl.once('失恋', fn1);
girl.once('失恋', function (who) {
    console.log(who, '吃');
});
girl.once('失恋', function (who) {
    console.log(who, '吃');
});

// on emit on('newListener') off once