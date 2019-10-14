/// 默认我们js 执行栈 会开启一条主线程
// 1) 浏览器执行的时候 会将到达时间的定时 ajax 存入到回调中，当主执行栈执行后，会从队列中取出第一个宏任务来执行,
// setTimeout(() => {
//     console.log('time1');
//     setTimeout(() => {
//         console.log('time4');
//     }, 0);
// }, 0);
// setTimeout(() => {
//     console.log('time2')
// }, 0);
// setTimeout(() => {
//     console.log('time3')
// }, 0);

// 当script 执行完毕后 会先将微任务队列清空，清空后 会执行宏任务
// 微任务清空后，会取出一个宏任务执行，宏任务执行完毕会再次清空微任务，无线循环
// 这个过程是无限的 浏览器关闭后就销毁了
setTimeout(() => {
    console.log('timeout1');
    Promise.resolve().then(data => {
        console.log('promise2')
    })
}, 0);

setTimeout(() => {
    console.log('timeout2')
}, 0);

console.log('hello');
// 异步代码 会等待同步代码执行完毕



// 执行顺序的问题  // 我们写node 现在 11 和 浏览器是一致的
// node < 11;  
setTimeout(() => {
    console.log(9);
     new Promise((resolve, reject) => {
    }).then(() => {
        console.log(7)
    })
}, 0) ;
setTimeout(() => {
    console.log(1)
}, 0);

// 9 5 6 7 1    

// vue.nextTick(下一个队列)
// nextTick 异步的

// 微任务：then  MutationObserver(监控dom 变化 等待本轮dom变化完成后会执行)
// 宏任务 ie下有的setImmediate  setTimeout (MessageChannel)