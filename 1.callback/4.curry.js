function checkType(type,value){
    // call 改变了this指向
     return Object.prototype.toString.call(value) === `[object ${type}]`
}
let util = {};
let types = ['String','Number','Boolean','Null','Undefined']
types.forEach(type=>{
    util[`is${type}`] = curring(checkType)(type)
});
console.log(util.isString('hello'))
// function add(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// 如何实现 柯里化的通用函数
function curring(fn, arr = []) {
  // 函数的参数就是 可以通过length 来取到形参的个数
  let len = fn.length; // 获取当前函数的参数
  return function(...args) {
    // [1,2]
    arr = [...arr, ...args];
    if (arr.length < len) {
      // 传入的参数 不够执行的
      return curring(fn, arr); // 递归 如果数量不够 不停的返回 函数，继续接受参数
    } else {
      return fn(...arr);
    }
  };
}
// let r = curring(add)(1, 2)(3)(4, 5, 6);
// console.log(r);

// 1) 反柯里化 是让函数的方法 变得更通用一些 反柯里化的实现
// Object.prototype.toString.call(value)
// toString('hello');


// 架构课7期第一天  周三 周五晚上 8-10 周日是全天 10.1休息
// 下一期 涨价1000 
// 实体是在 回龙观东大街

// promise 主要处理 异步逻辑 