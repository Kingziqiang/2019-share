const util = require('util');
util.inherits('123')
console.log(util.types.isString('123'))

// inherits 可以实现继承
// isArray isBoolean 可以有一些方法来判断类型

// 将回调的方式转换成promise的方式

const fs = require('fs');

// fs.readFile('./1.txt',function (err,data) {
    
// })
function promisify(fn) {
    return (...args)=>{
        return new Promise((resolve,reject)=>{
            fn(...args,function (err,data) { // 这个写法只能针对同一的 node api来处理
                if(err) reject(err);
                resolve(data);
            })
        })
    }
}
let read = promisify(fs.readFile);
read('./events.js').then(data=>{
    console.log(data);
})
// promisify

// 判断 两个元素是否相等
console.log(util.isDeepStrictEqual(NaN,NaN))