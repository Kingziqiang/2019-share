// 使用ejs 模板
// 模板引擎的原理 with语法
// let obj = {name:'zf'}
// with(obj){ // 声明一个当前作用域下的this
//     console.log(name)
// }

// new Function 也可以让字符串执行
// let fn = new Function(`let str = 123; return str`);
// console.log(fn())

let fs = require('fs');
let str = fs.readFileSync('index.html', 'utf8');
let ejs = require('ejs');
function render(str, renderObj) {
    // 拼接的是一个纯字符串
    let head = 'let str="";\r\nwith(name){\r\nstr = `\r\n';
    str = str.replace(/<%=([\s\S]+?)%>/g, function () {
        return '${' + arguments[1] + '}'
    })
    let content = str.replace(/<%([\s\S]+?)%>/g, function () {
        return '`\r\n' + arguments[1] + '\r\nstr+=`'
    });
    let tail = '`\r\n}\r\n return str'
    let s = head + content + tail;
    return new Function('name', s)(renderObj)
    // return str.replace(/<%=([\s\S]+?)%>/g,function () {
    //     return renderObj[arguments[1]]
    // })
}
// 深入浅出 nodejs 
let renderStr = render(str, {
    name: [1, 2, 3]
});
console.log(renderStr)