// 处理异步的解决方案 回调函数
// node api 方法
let fs = require("fs"); // file system 读取文件 操作文件

// node 异步i/o,并发
let school = {};
// 计数器的方式
// let index = 0;
// function out(){
//     index++;
//     if(index === 2){
//         console.log(school)
//     }
// }
function after(times,callback){ // 高阶函数, 发布订阅模式
    return function(){
        if(--times === 0){
            callback();
        }
    }
}
let out = after(2,function(){ // 将数量内置到after函数中，闭包 Promise.all
    console.log(school);
});
// 每次读取后 都调用out方法
fs.readFile('./name.txt','utf8',function(err,data){
    school['name'] = data;
    out();
})
fs.readFile('./age.txt','utf8',function(err,data){
    school['age'] = data;
    out();
})
