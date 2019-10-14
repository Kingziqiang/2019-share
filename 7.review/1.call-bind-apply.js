// call的实现
// 1) 改变this指向 2) 让函数执行
function fn(a,b){
    console.log(this,a,b);
}
function fn1() {
    console.log('100')
}
Function.prototype.apply = function(context,args){
    context = context ? Object(context) : global;
    context.fn = this; // call的特点就是将自己 放到一个对象上 通过对象调用
    context.fn(...args);
    delete context.fn;
}
// 不管.多少次call  fn.call.call.call.call = 原型上的call方法
// call.call(fn1)
// 我让 call方法中的this 变成fn1
// 让call函数执行
fn.call.call.call.call.call(fn1); // 结果
fn.apply(1,[2,3]);
