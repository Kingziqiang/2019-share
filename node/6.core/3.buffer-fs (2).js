// 前端不能实现读取文件 h5 fileReader, blob类型 文件类型
// 我们希望可以存储2进制 buffer -> 和字符串转化
// buffer 是十六进制

// 二进制 逢二进一 最小单位 0 / 1  一个字节由8个位组成 ，每个位只能存 0-1 最大代表的10进制是 255
// 十六  逢16进一 buffer中最大的值就是ff


// 进制转化 
// 1) 将任意进制转化成10进制
console.log(parseInt('111', 2))
// 2) 将十进制 转化成任意进制
console.log((0x16).toString(10))

// base64 优点 ： 减少请求  1） 小  2) 转码的过程
// 汉字的字节 编码问题
// ASCII 1个字节 127个字母 数字 特殊符号 1个字节
// gb18030 gbk 2个字节表示一个中文
// unicode => utf8 长度可变  emoj 中文3个字节

// gbk 2 utf8 3 (node 默认只支持utf8)
let buffer = Buffer.from('珠');
console.log(buffer); // 3 * 8 => 4 * 6

// 0xe7 0x8f 0xa0
console.log((0xe7).toString(2))
console.log((0x8f).toString(2))
console.log((0xa0).toString(2))

// 00111001    00111000    00111110   00100000
// 一个字节不能超过64

let base64Encoding = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
base64Encoding += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
base64Encoding+= '0123456789+/';


console.log(parseInt('00111001',2))
console.log(parseInt('00111000', 2))
console.log(parseInt('00111110', 2))
console.log(parseInt('00100000', 2))

// 57 56 62 32

console.log(base64Encoding[57] + base64Encoding[56] + base64Encoding[62] + base64Encoding[32]);

// 可以出现在任何的url 路径上 ,不用发请求 但是不适合大图片 fileReader base64


// Buffer 把内容 存入到内存中 ，buffer用来表示内存的 
// 16进制 
// 声明内存 , 通过长度  把字符串存储到内存中 ， 手动写内存里放什么


// 1) 声明 buffer的三种方式   内存申请后不能随意的更改长度
// let buf1 = Buffer.alloc(10);

// let buf2 = Buffer.from('珠峰');

// let buf3 = Buffer.from([1,2,3,100]);

// 2) buffer中的常见方法 循环 截取 有索引 
// buf1.forEach(item=>{
//     console.log(item);
// })

// let r = buf1.slice(0,1); // [[],[],[]] 
// r[0] = 100;
// console.log(buf1)
// console.log(buf1[0]);
// console.log(Buffer.isBuffer(buf2))
// // 3) 重写的方法  拷贝的方法  拼接的方法
// let buf1 = Buffer.from('珠峰前端课程');
// buf1.write('后端',6,6,'utf8');
// console.log(buf1.toString());


// 多个文件拼接  copy
let buf1 = Buffer.from('珠峰');
let buf2 = Buffer.from('前端');

let buff3 = Buffer.alloc(12);
Buffer.prototype.copy = function (targetBuffer,targetStart,sourceStart=0,sourceEnd=this.length) {
    for (let i = sourceStart; i < sourceEnd;i++){
        targetBuffer[targetStart+i] = this[i];
    }
}
// copy 就是把源buffer 拷贝到目标buffer上 
buf1.copy(buff3,6)
buf2.copy(buff3,0);
console.log(buff3.toString())

// 上传文件 、 数据 tcp 分段 后端会一段段收到  二进制的

Buffer.concat = function (bufferList,len=bufferList.reduce((prev,next)=>prev+next.length,0)) {
   let buffer = Buffer.alloc(len);
   let offset = 0;
   bufferList.forEach(buf=>{
       buf.copy(buffer, offset);
       offset += buf.length
   });
   return buffer;
}
console.log(Buffer.concat([buf1, buf2]).toString());



// 前端传递给后端的数据 自定义格式的数据

// 珠峰我爱你珠峰我爱你珠峰我爱你珠峰我爱你珠峰我爱你


let buffer = Buffer.from('a珠峰我爱你珠峰我爱你珠峰我爱你珠峰我爱你珠峰我爱你');
Buffer.prototype.split = function (sep) {
    let arr = [];
    let offset = 0;
    let start = 0;
    sep = Buffer.from(sep);
    while ((offset = this.indexOf(sep, start)) !== -1) {
       arr.push(this.slice(start, offset))
       start = offset + sep.length; // 不停的进行查找操作
    }
    arr.push(this.slice(start));
    return arr;
}
let arr = buffer.split('爱');
console.log(arr);

// 1.slice截取 
// 2.isBuffer 是不是buffer 
// 3.toString (可以将buffer转成指定的编码)  
// 4.length (字节的长度)  
// 5.concat 拼接方法
// 6.indexOf => split方法