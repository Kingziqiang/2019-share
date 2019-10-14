// 他可以包裹一个promise 并且给这个promise 提供一个abort方法，可以让这个promise变成失败态度
function wrap(p1) {
    // 在内部在构建一个promise ，这个promise 我可以将它的失败的方法暴露到abort上
    // 如果用户调用了abort方法 会让这promise.race 立即失败
    let abort = null;
    let p = new Promise((resolve,reject)=>{
        abort = reject;
    })
    let newPromise = Promise.race([p,p1]);
    newPromise.abort = abort;
    return newPromise;
}
let p = wrap(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功'); // 走完后 只是抛弃掉了执行结果而已
    }, 3000);
}))
// 如果超过2s 这个promise 的成功结果我就不要了
p.then(function (data) {
    console.log(data);
} , function (err) {
    console.log('err', err)
})
setTimeout(() => {
    p.abort('超时')
}, 1000);