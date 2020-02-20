let fs = require('fs').promises;
let path = require('path');
// 同步删除所有文件夹

// function rmdirSync(dir){
//     // 只有当前文件夹的子节点 dirs
//     let dirs = fs.readdirSync(dir); // 先读取自己的儿子
//     dirs = dirs.map(d => path.join(dir, d)); // 把路径进行拼接 
//     // 遍历目录删除
//     for(let i = 0; i< dirs.length;i++){ // 删除自己的儿子
//         let current = dirs[i];
//         let statObj = fs.statSync(current);
//         if(statObj.isDirectory()){ // 如果是文件夹就删除文件夹
//             fs.rmdirSync(current);
//         }else{ //文件就删除文件
//             fs.unlinkSync(current);
//         }
//     }
//     fs.rmdirSync(dir);
// }
// rmdirSync('e');

// 异步 串行(一条线)) 和 并行(性能高)

// 串行 先序深度遍历
// function rmdir(p,cb){
//     // 判断是不是文件夹 如果不是删除文件跑路即可
//     fs.stat(p,function (err,statObj) {
//         if(statObj.isDirectory()){
//             fs.readdir(p,function (err,dirs) {
//                 dirs = dirs.map(dir => path.join(p,dir)); // [a/b,a/q.js]
//                 // 异步
//                 let index = 0;
//                 function next(){
//                     if (index === dirs.length){
//                         return fs.rmdir(p, cb)
//                     }
//                     // 将儿子删除后,在删除自己
//                     let current = dirs[index++]; // 第一个目录  a/b
//                     rmdir(current,next); // 第一个删除完成后调用回调，在删除下一个
//                 }
//                 next();
//             })
//         }else{
//             fs.unlink(p, cb)
//         }
//     })
// }
// rmdir('a',function () {
//     console.log('删除成功')
// });

// Promise.all



// 并行 先序深度优先 
// function rmdir(p, cb) {
//     fs.stat(p, function (err, statObj) {
//         if (statObj.isDirectory()) {
//             fs.readdir(p, function (err, dirs) {
//                 dirs = dirs.map(dir => path.join(p, dir)); // [a/b,a/q.js]
//                 // 异步
//                 // 先看有没有儿子 如果没有儿子直接删除即可
//                 if(dirs.length === 0){
//                    return fs.rmdir(p,cb);
//                 }
//                 let index = 0;
//                 function done(){
//                     index++; // 儿子都删除完毕后 
//                     if(index === dirs.length){
//                         fs.rmdir(p, cb); // 删除自己
//                     }
//                 }
//                 // 有儿子就依次删除，并且删除后调用done方法
//                 for(let i =0 ; i< dirs.length;i++){
//                     let dir = dirs[i];
//                     rmdir(dir,done)
//                 }
//             })
//         } else {
//             fs.unlink(p, cb)
//         }
//     })
// }
// rmdir('a', function () {
//     console.log('删除成功')
// });

async function rmdir(p){
    let statObj = await fs.stat(p);
    if(statObj.isDirectory()){
        let dirs = await fs.readdir(p);
        dirs = dirs.map(d => rmdir(path.join(p, d)));
        await Promise.all(dirs);
        await fs.rmdir(p);
    }else{
        await fs.unlink(p);
    }
}
// function rmdir(p) {
//     return new Promise((resolve,reject)=>{
//         fs.stat(p,function (err,statObj) {
//             if(statObj.isDirectory()){ // 先读取目录 
//                 fs.readdir(p,function(err,dirs){
//                     // 将目录 进行添加父路径 
//                     dirs = dirs.map(d => rmdir(path.join(p,d)));
//                     // 删除子目录后删除自己 如果没有儿子直接删除自己即可
//                     Promise.all(dirs).then(()=>{
//                       fs.rmdir(p,resolve);
//                     })
//                 })
//             }else{
//                 fs.unlink(p, resolve);
//             }
//         })
//     })
// }；

rmdir('a').then( function () {
    console.log('删除成功')
});