// fs中 stream 可以有方向 而且可以不关心整体内容, 我可以分段读取


// fs.open fs.read fs.write fs.close  发布订阅模式 events模块

// 可读流
// 写流
let fs = require('fs');

let ReadStream = require('./readStream')
// rs 是可读流对象

// r+ 以读取为准 文件不存在 报错
// w+ 以写为准 文件不存在 创建
let rs = fs.createReadStream('./bbb.txt', {
    flags:'r',
    encoding:null,
    mode: 438, // d rwx r-x r-x  chmod -r 777  2 读 4 写 1 执行
    autoClose:true,
    start:0,
    // end: 5, // 包前 也包后
    highWaterMark:2
});
// 发布订阅可以实现解耦合
// 默认当前是 暂停模式
// 监听了data事件 会将流模式改为 flowing 流动模式
let arr = []
rs.on('open',function (fd) {
    console.log('open', fd)
})
rs.on('data',function (data) { // buffer
    arr.push(data);
    console.log(data);
});// rs.emit('data')
rs.on('end',function () {
    console.log(Buffer.concat(arr).toString())
})
rs.on('close', function () {
    console.log('close')
})