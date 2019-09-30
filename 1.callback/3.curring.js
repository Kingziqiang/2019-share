// 函数柯里化 我需要把核心的功能 提出一个更细小的函数
// 反柯里化

// 校验类型
// 1) typeof 不能校验 对象 数组 object null
// 2) instanceof 谁是谁的实例
// 3) Object.prototype.toString.call 不能判断实例 [object Object]
// 4) constructor 判断当前是谁构造出来的

// 普通函数 每次都需要传递参数,可以使用高阶函数 来绑定参数
function checkType(type){ // 柯里化  // 什么是闭包
    return function(value){
        return Object.prototype.toString.call(value) === `[object ${type}]`
    }
}
// 当前这个函数可以不再当前作用域下执行 这个就叫闭包 (高程3 犀牛 你不知道的js)
let isString = checkType('String'); // 类似于闭包
console.log(isString('hello'))
console.log(checkType('hello1'))

let isNumber = checkType('Number'); // 类似于闭包
console.log(isNumber(123));

// 作用域:函数定义时候产生的，执行上下文，js静态作用域