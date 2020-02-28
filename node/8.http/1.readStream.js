// fs 模块下  直接可以使用stream模块

// let fs = require('fs');
// let {
//     Readable,
//     Writable
// } = require('stream');
// // fs.createReadStream('./test.js');
// class MyWriteStream extends Writable{
//     _write(chunk,encoding,callback){
//         console.log(chunk);
//         callback(); // clearBuffer
//     }
// }
// let mw = new MyWriteStream
// mw.write('hello');
// mw.write('hello');
// mw.write('hello');
 // Writable 接口  write方法，会默认调用子类的_write方法

// 默认我们的文件流 会继承Readable接口
// 默认会open => ready
// 子类ReadStream 会调用父类的read方法
// 父类会调用子类的 _read方法


// 自己实现一个流 我先创建一个类 这个类要继承Readable接口,内部默认会调用read方法
// 还要在提供一个_read方法

// class MyReadStream extends Readable{
//     constructor(){
//         super()
//         this.index = 0;
//     }
//     _read(){ // string or buffer
//         this.push(this.index++ +'');
//         if(this.index >= 10){
//             this.push(null); // push null
//         }
//     }
// }
// let mr = new MyReadStream;
// let arr = [];
// mr.on('data',function (chunk) { // 0-10
//     arr.push(chunk)
// })
// mr.on('end',function () {
//     console.log(Buffer.concat(arr).toString())
// })



// 四种 可读流  可写流  双工流 (重写_read和_write)

let {
    Readable,
    Writable,
    Duplex,
    Transform
} = require('stream');

// 压缩 读 =》 转化 =》 写

class MyTransform extends Transform{
    _transform(chunk, encoding, cb) {
        chunk = chunk.toString().toUpperCase();
        this.push(chunk);
        cb()
    }
}
let mt = new MyTransform


// process.stdin.on('data',function (chunk) {
//     process.stdout.write(chunk);
// });

process.stdin.pipe(mt).pipe(process.stdout)
// console.log(s)


// class MyDuplex extends Duplex{
//     _read(){
//         this.push('a');
//         this.push(null)
//     }
//     _write(chunk,encoding,cb){
//         console.log(chunk.toString())
//         cb();
//     }
// }
// let m = new MyDuplex();

// m.on('data',function (chunk) {
//     console.log(chunk)
// })

// m.write('ok')

// 什么是可读流 什么是可写流  pipe