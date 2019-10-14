// core 掌握node中的全局对象 global (整个应用)
// 全局对象: 在文件中不用声明可以直接使用的,声明在global上的属性都是全局对象 

// 默认文件中的this不是global,声明的变量不会放到global上
// console.log(this === global);

// process 进程对象
// Buffer 缓存区 内存 图片二进制的 （16进制）
// clearInterval clearTimeout setTimeout setInterval
// setImmediate clearImmediate (是个宏任务)


// 1) process 代表当前运行的进程
// 1.1）platform 平台 
// console.log(process.platform === 'win32')
// 1.2）argv 用户执行node时传递的参数
// node + 文件的名 3000 d:
// console.log(process.argv.slice(2)); // 后面就是用户传递来的参数
// webpack webpack -p 3000 -c webpack.config.js 

// 方案1 这个地方不需要自己来处理
// let r= process.argv.slice(2).reduce((memo,current,index,arr)=>{
//     if(current.startsWith('-')){
//         memo[current.replace(/-/g,'')] = arr[index + 1] || true;
//     }
//     return memo;
// },{});

// 方案2:commander 命令行 管家  90% 用别人写的包
// npm install 
// let program = require('commander');
// program.version('1.0.0')
// // program.option('-p,--port <value>','you can set prot')
// program.command('rm').action(()=>{
//      console.log('remove directory')
// })
// program.parse(process.argv)

// console.log(program);

// 1.3) env 环境变量 当前运行时的环境变量
// console.log(process.env); // 不同的环境设置方式不同 export(mac) set(window)
// webpack 生成环境 可能要实现压缩
// 开发时候 可能用的url  localhost 上线的时候http://xxx.com

// cross-env 可以跨平台设置环境变量 
// cross-env mode=prod  node 3.core. 
let url = ''
if(process.env.mode == 'dev'){
    url = 'localhost'
}else{
    url = 'com'
}
// console.log(url);

// cwd 代表用户执行node时所在的目录 current working directory
// console.log(process.cwd()); // 表示在哪里执行node的命令

// nextTick 下一队列 是一个微任务  给不同的方法都设置了不同的队列 （执行结果和浏览器是一致的）
// nextTick node事件环
// console.log(Object.keys(process));


// console.log(Object.keys(global))

// v8引擎
// 默认v8引擎上的方法 都是存在的只是看不到而已
// 浏览器 是通过window 对象来访问global
// console.dir(global,{showHidden:true})

// 和浏览器一样每次执行宏任务都会清空微任务队列
// 默认会先执行 主栈中的代码，执行后 （会清空微任务），进入的eventloop中开始循环,会先检测时间是否到达，如果没到达 会向下切换队列，走到poll阶段，如果用户有绑定setImmediate,会执行setImmediate,当一轮执行后 会再次进入循环，如果时间还没到,进入到poll,会在poll这个阶段 进行等待,等待时间到达

// 受node的性能影响  node执行的时候 可能整个就用4s 

let fs = require('fs');
// i/o的下一个阶段  是 CHECK阶段
fs.readFile('server.js',function () {
    setTimeout(() => {
        console.log('time out')
    }, 0);
    setImmediate(()=>{
        console.log('immediate')
    })
});
// 如果你的版本是10版本  浏览器 1个宏任务执行完 就清空微任务， node中 清空完整个队列后再清空微任务

// 1) 顺序不确定
// setTimeout(() => {
//     console.log('time out')
// }, 0);
// setImmediate(()=>{
//     console.log('immediate')
// })