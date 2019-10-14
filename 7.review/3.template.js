// 模板引擎 ejs jade undescore handlebar nunjunks {{name}}}
// 核心就是数据替换

// 模板字符串 es6 语法
// let name = 'zf';
// let age = 10;

// let str = "${name}今年${age}岁了";
// // [\s\S] 所有字符
// // [\s\S]+ 至少一个
// // [\s\S]+? 尽可能少匹配
// // () 分组 会将匹配到的结果 放到arguments
// let s = str.replace(/\$\{([\s\S]+?)\}/g,function () {
//     return eval(arguments[1])
// })
// console.log(s)