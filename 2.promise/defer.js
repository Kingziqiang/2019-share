// 延迟对象
let fs = require('fs');
// let Promise = require('./promise');
// new Promise((resolve,reject)=>{
//     // resolve 中如果放了一个promise  那么会等待这个promise 执行完成
//     reject('失败')
//     // resolve(new Promise((resolve,reject)=>{
//     //     setTimeout(()=>{
//     //         resolve('hello'); 
//     //     },1000)
//     // }))
// })
Promise.reject('失败').then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
    return undefined; // catch 没有终止的功能
}).then(data=>{
    console.log(data);
    throw 'error'
}).finally(()=>{ //=>then
    console.log('hello');
}).then(data=>{
    console.log(data);
},err=>{
    console.log(err,'失败')
})
// 1) 反柯里化
// 2) 实现finally  （面试必问） 无论成功是白都执行的方法
// Promise.prototype.finally = function (callback) {
//     let P = this.constructor;
//     return this.then(
//       value  => P.resolve(callback()).then(() => value),
//       reason => P.resolve(callback()).then(() => { throw reason })
//     );
// };

// defer的实现 就是这样实现的
// function read(){ // angular Q库
//     let defer = Promise.defer();
//     fs.readFile('./note.md','utf8',function(err,data){
//         if(err){
//             defer.reject(err);
//         }else{
//             defer.resolve(data);
//         }
//     });
//     return defer.promise
// }
// read().then(data=>{
//     console.log(data);
// });

