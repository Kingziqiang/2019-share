// 写流 文件的可写流 读异步的fs.read  写的fs.write

// 异步并发
let fs = require('fs');
let WriteStream = require('./WriteStream')
// readFile writeFile
let ws = fs.createWriteStream('./name.txt', {
    flags: 'w',
    // 16k
    highWaterMark: 1, // 代表的是读取的限制大小 希望占用多少内存
    autoClose: true,
    start: 0, // 开始写入的位置
    mode: 0o666,
    encoding: 'utf8'
});
let index = 0;

function write() {
    let flag = true;
    while (index < 10 && flag) {
        flag = ws.write(index++ + '','utf8',()=>{
            console.log('写入成功')
        })
    }
    // if(index === 10){
    //     ws.end('遗言'); // == ws.write + ws.close();
    //     // ws.write('123');  write after end
    // }
}
write();
// 当我们所占用的内存都写入了 会触发drain
// drain 只有当前写入的内容 达到了 超过了预期才会触发drain事件
ws.on('drain',function (params) {
    console.log('drain')
    write();
})



// 我希望用一个字节的内存 写入10个数

// write end  on('drain')

// 其他流
// http + http-header + koa + express
// mongo + redis
// koa + mongo => mvc