// fs用法 fileSystem 文件系统 

// readFile readFileSync
// writeFile writeFileSync

// 拷贝 读取的文件可能非常大 内存 8g

// 采用同步时: require('./xxx')
// 读取并拷贝文件 运行中的代码 采用异步的方式来操作  非阻塞i/o
// 不好写

// 1) 读取的文件必须存在，不存在则报错，需要增加编码来表示读取出来的结果
// 2) 写入时如果文件不存在会创建,如果有会先清空在写入，写入的数据默认会以utf8编码的类型(buffer) 如果写入的是对象格式会转成utf8  toString('utf8')
let fs = require('fs');
let path = require('path');
fs.readFile(path.resolve(__dirname,'events.js'),'utf8',function (err,data) {
   if(err){
       return console.log(err);
   }
   fs.writeFile(path.resolve(__dirname, 'dist.txt'), Buffer.from('珠峰'),function (err) {
        if(err){
            return console.log(err);
        }
        console.log('写入成功')
   })
});

// 会导致内存占用率可能过高 ， 淹没可用内存  硬盘拷贝数据

