
let Promise = require('./promise');
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('呵呵');
    },1000)
})
p.then().then().then(function(data){
    console.log('data',data)
},err=>{
    console.log('reject',err)
})

// let p = new Promise((resolve,reject)=>{
//     resolve();
// })
// let p2 = p.then(()=>{
//     console.log(1);
//     return p2;// 自己等待自己完成 那永远不会完成，直接抛出错误 TypeError: Chaining cycle detected for promise #<Promise>
// },()=>{
//     return p2
// });
// p2.then(()=>{},(err)=>{
//     console.log(err);
// })

// // 先走同步 在走异步

// class A{
//     constructor(){
//         setTimeout(()=>{
//             console.log(a);
//         })
//     }
// }
// let a = new A();