let fs=  require('fs');
let Promise1 = require('./promise')
function read(filename,encoding){
    let dfd = Promise1.defer();
    fs.readFile(filename,encoding,(err,data)=>{
        if(err){
            dfd.reject(err)
        }else{
            dfd.resolve(data);
        }
    })
    return  dfd.promise;
}
function isPromise(value){
    if((typeof value === 'object' && value!==null)  || typeof value =='function'){
        if(typeof value.then === 'function'){
            return true;
        }
    }
    return false
}
Promise.all = function(promises){
    return new Promise((resolve,reject)=>{
        let arr = [];
        let index = 0;
        let processData = function(i,y){
            arr[i] = y;
            if(++index=== promises.length){
                resolve(arr);
            }
        }
        for(let i =0 ; i< promises.length;i++){
            let value =promises[i];
            if(isPromise(value)){
                value.then(function(y){
                    // i 对应的结果 就是 y
                    processData(i,y);
                },reject)
            }else{
                processData(i,value);
            }
        }
    });
}
// 都成功才算成功 有一个失败 才算失败

Promise.race([read('./name.txt','utf8'),read('./age.txt','utf8')]).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
// 3.Promise.race()实现方法
// 先讲 fs的读取方法 变成promise的模式

// generator co async + await