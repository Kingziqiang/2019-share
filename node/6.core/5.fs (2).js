// node自己封装了文件流 

// 提供一系列的api 自己可以控制读取和写入的个数

// 1) 读取
// let buffer = Buffer.alloc(3);
let fs = require('fs');
// 先打开文件  读取就是r            fd文件描述符号 数字类型
// fs.open('./dist.txt', 'r', function (err, fd) {
//     console.log(fd);
//     // 文件描述符, buffer 当前读取到哪里去 i/o offset表示从buffer的哪个位置开始写入
//     // length 写入的个数
//     // 从文件的(索引)为2的位置开始读取 
//     fs.read(fd, buffer, 0, 3, 2, function (err, bytesRead) { // bytesRead读取到的个数
//         fs.close(fd,function (err) {
//             console.log('关闭成功');
//             console.log(buffer.toString())
//         })
//     })
// })
// 2) 写入
// let buffer = Buffer.from('珠峰');
// fs.open('./dist.txt','w',function(err,fd) {
//     // 像dist 文件中的第0个位置索引写入 写入buffer ，从buffer的索引3处开始写入 写入3个
//     fs.write(fd, buffer,3,3,0,function (err,written) {
//     })
// })
// 防止内存占用过高 需要读取一点 写入一点 
function copy(source, target, callback) { // 异步嵌套过深  发布订阅
    let buffer = Buffer.alloc(5);
    let readOffset = 0;
    let writeOffset = 0;
    fs.open(source, 'r', function (err, rfd) {
        fs.open(target, 'w', function (err, wfd) {
            // co
            function next() {
                // bytesRead 真实读取到的个数
                fs.read(rfd, buffer, 0, buffer.length, readOffset, function (err, bytesRead) {
                    readOffset += bytesRead
                    if (bytesRead ) { // 能读取到
                        fs.write(wfd, buffer, 0, bytesRead, writeOffset, function (err, written) {
                            writeOffset += written
                            next();
                        })
                    } else {
                        fs.close(rfd,function(){});
                        fs.close(wfd,function () {});
                        callback();
                    }
                })
            }
            next();

        })

    })
}

copy('./aaa.txt', './bbb.txt', function () {
    console.log('拷贝成功')
})