// try 如果代码是同步的 出错了 我希望是同步执行

function fn() {
    console.log(1);
    throw new Error('出错了')
}
// Promise.resolve(fn()).catch(err=>{ // then 是异步的 延迟抛出错误
//     console.log(err);
// })
;
Promise.try= function(fn) {
    return (async ()=> fn())()
    // return new Promise((resolve,reject)=>{
    //     resolve(fn());
    // })
}
Promise.try(fn).catch(err=>{
    console.log(err);
})

// 1) 目的 同步代码 同步的抛错  异步代码正常就可以，异步：不需要放到下一队列
console.log('456');