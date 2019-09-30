// const Promise = require('./promise');

// name.txt
// 需要等待第一个人的输出结果 是下一个人的输入
// 恶魔金字塔 ，回调地狱 不好维护 错误处理不方便
let fs = require('fs');

function read(filename,encoding){
    return new Promise((resolve,reject)=>{
        // 读取的文件不存在 就会执行失败的逻辑
        fs.readFile(filename,encoding,function(err,data){
            if(err) reject(err);
            reject(data);
        })
    })
}
// 1) 如果then成功或失败的结果中 返回的还是一个promise ， 会等待这个promise的执行结果，并将结果像外层的then的一下then中，并将结果传递到参数中
// 2) 如果then（成功方法、失败方法）抛出异常的时候 会走下一次then 的失败
// 走失败有两种情况 1） 返回一个失败的promise, 2) 抛出异常

// 3) 我希望 走晚失败后 就终止promise
read('./name.txt','utf8').then((data)=>{
   // throw new Error('123');
   // return read(data+'1','utf8')
   return 123
},(err)=>{
    console.log(1,err);
    // return new Promise(()=>{}); // 返回一个 不成功也不失败的promise 就可以终止链的调用
}).then((data)=>{
    console.log('sucess',data);
},(err)=>{
    console.log('err',err)
})
// 如果想链式调用 第一种就是返回this,第二种就是返回一个新的实例

// fs.readFile('./name.txt','utf8',function(err,data){
//     fs.readFile(data,'utf8',function(err,data){
        
//     })
// })

let p = new Promise((resolve,reject)=>{
    reject(); // 目前这个p 已经失败了
})
p.then(()=>{},()=>{
    return undefined; // 有返回了成功，如果返回的是同一个实例，那这个p的状态就变了
}).then(()=>{ // 每次调用then都需要返回一个新的promise状态，保证状态不影响

})