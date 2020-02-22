// 写流 文件的可写流 读异步的fs.read  写的fs.write

// 异步并发

let fs = require('fs');

// readFile writeFile
let ws = fs.createWriteStream('./name.txt',{
    flags:'w',
    highWaterMark:2, // 代表的是读取的限制大小 希望占用多少内存
    autoClose:true,
    start:0, // 开始写入的位置
    mode:0o666,
    encoding:'utf8'
});
// 只能放 字符串、buffer
let flag = ws.write('1','utf8',()=>{ // 真的像文件中写入
    console.log('写入成功')
});
console.log(flag)
flag = ws.write('2', 'utf8', () => { // 都放到内存中了
    console.log('写入成功')
})
console.log(flag)
flag = ws.write('3', 'utf8', () => {
    console.log('写入成功')
})
console.log(flag);
// 我希望用一个字节的内存 写入10个数


// 树 集合 队列 栈 链表 。。