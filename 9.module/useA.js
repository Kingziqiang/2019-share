// require 的功能是 读取文件，在浏览器是不能使用的
// 1 vscode 调试 
// 2 浏览器 调试
// 调试node代码

let str = require('./a')
console.log(str); 



// (function(exports,require,module,__dirname,__filename){
//     module.exports = 'hello'
//    
// })()
//  return module.exports;

// 4：20继续

// 1. Module._load 加载某个模块
// 2. Module._resolveFilename 解析文件名 解析出绝对路径
// 3. new Module 创建一个新的模块  id ,exports 最终导出的结果
// 4. tryModuleLoad 尝试加载模块