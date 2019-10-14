// Promise.prototype.finally = function (callback) {
//     // finnaly 是then的简写
//     return this.then((value) => { // Promise
//         // Promise.resolve 具备等待效果
//         return Promise.resolve(callback()).then(() => value)
//     }, (err) => {
//         return Promise.resolve(callback()).then(() => {
//             throw err
//         })
//     })
// }
Promise.prototype.finally = function (fn) {
    const p = this;
    return new Promise((resolve, reject) => { //执行回调函数,抛弃返回结果        
        resolve(fn())
    }).then(data => {
        // 衔接之前promise        
        return p.then(); // 这里没有处理失败
    })
}
Promise.reject('123').finally(function () {
    console.log('会被调用');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('ok');
        }, 1000);
    })
}).catch(data => {
    console.log('err', 123);
})


// 下午 讲下node  node事件环 
// commonjs 规范  模块导入导出的