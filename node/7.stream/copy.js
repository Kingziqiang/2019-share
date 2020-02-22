// let ReadStream = require('./ReadStream');

// let WriteStream = require('./WriteStream');
let fs = require('fs');

// pipe 管道 可以直接将可读流的数据导入到可写流中
// 无法监控到读取的内容 而且此方法是异步的
fs.createReadStream('./name.txt').pipe(fs.createWriteStream('a.txt',{
    flags:'a'
}));

// fs.appendFile() => fs.writeFile + flags+'a'

// let rs = new ReadStream('./name.txt',{
//     highWaterMark:4
// });
// let ws = new WriteStream('./a.txt',{
//     highWaterMark:1
// })


// on('data') on('end') // 可读流

// write end 可写流
