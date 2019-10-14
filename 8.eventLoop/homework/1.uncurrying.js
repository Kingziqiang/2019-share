//  1) 反柯理化 柯理化的作用 校验类型  checkType  isString isNull
// 反柯里化 目的是扩大函数的作用范围
// let r = Object.prototype.toString.call({name:'zf'});
// console.log(r)
function uncurring(fn){
    return function (context,...args) {
        // 我要保证调用的是原型上的apply 
        // 1) 改变this 2）让函数执行 3） 把参数传入
        // 就是将fn执行 并且将后续的参数 传递给 apply方法
        return Reflect.apply(fn, context, args)
        // Function.prototype.apply = function (context,args) {
        //     context.fn(...args);
        // }
        // return Function.prototype.apply.call(fn,context, args);
    }
}
// 默认通过 实例.apply
let join = uncurring(Array.prototype.join);
// 内部基于call来实现的
let r = join([1,2,3],':');
console.log(r);

// function test() {
//     console.log(this);
// }
// test.apply = function () {
    
// }
// test.apply(1);