// promise 承诺 （promise有三个状态 等待态、成功态、失败态）

// 默认现在高版本浏览器哦 默认支持 promise (es6-promise) polyfill 

// Promise 是一个类 ，默认new的时候 是等待态
// 我调用resolve 就是成功态
// 调用了reject 就是失败态
// 返回的是一个promise的实例，每个实例都有一个then方法

// executor 是立即执行的,如果内部出错了 就会变成失败态
let Promise = require('./promise');
let p = new Promise((resolve,reject)=>{
    
    //throw new Error('失败了')
    // resolve('发工资了');
    // reject('失败了') // 一旦成功就不会失败，反之亦然,默认只有是等待态的时候 才可以改变状态
});
console.log(2);
p.then((data)=>{
    console.log('成功',data)
},(reason)=>{
    console.log('失败',reason)
});
p.then((data)=>{
    console.log('成功',data)
},(reason)=>{
    console.log('失败',reason)
});