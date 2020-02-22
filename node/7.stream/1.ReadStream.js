// 可读流  可写流
// 针对fs 
let fs = require('fs');

// let ReadStream = require('./ReadStream')

let rs = fs.createReadStream('./name.txt', {
    highWaterMark:3, // 读取的时候 每次默认读取64k
    start:0,
    end:7,
    flags:'r',
    encoding:null
});

// 读流的好处 fs.readFile的区别, 不关心整体内容  可以控制速度
let arr = [];
rs.on('data',function (chunk) {
    //rs.pause(); // 暂停data事件的触发
    arr.push(chunk);
    console.log('data')
});
// setTimeout(() => {
//     rs.resume(); // 恢复data事件的触发
// }, 1000);
rs.on('end',function () {
    console.log(Buffer.concat(arr).toString());
});

// 如果是文件
rs.on('open',function () {
    console.log('open')
});

rs.on('close',function () {
    console.log('close');
})

rs.on('error',function () {
    console.log('error')
})


// on('data') on('end') on('error') pause resume


// fs.read  fs.write

// 流 http