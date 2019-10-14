// race 赛跑
// 多个promise 谁先执行出来结果 就采用谁的
let fs = require('fs').promises;

let p = fs.readFile('./note.md','utf8');

// Promise.all
function  isPromise(value) {
    return typeof value.then === 'function'
}
Promise.race = function (promises) {
    return new Promise((resolve,reject)=>{
        for (let i = 0; i < promises.length;i++){
            let current = promises[i];
            if(isPromise(current)){ // 是promise 就直接执行就可以了 
                current.then(resolve,reject)
            }else{
                resolve(current);
            }
        }
    })
}
Promise.race([p,1]).then(data=>{
    console.log(data);
})
