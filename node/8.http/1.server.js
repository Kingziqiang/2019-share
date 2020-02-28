// let urlStr = 'http://username:password@www.zhufeng.cn:80/user?a=1#aaa'
// let url = require('url'); // pathname hostname query
// let urlObj = url.parse(urlStr,true);
// console.log(urlObj)

let http = require('http');
let url = require('url')
let server = http.createServer(function (req,res) {
    // 每次客户端请求时 都会产生一个新的req和res
    // 请求行部分 ------------------------------
    console.log(req.method); // 请求方法都是大写的
    let {pathname,query} = url.parse(req.url,true);
    console.log(pathname,query);
    console.log(req.httpVersion);
    // 请求头
    console.log(req.headers); // 包含所有请求头信息 所有的key 都是小写的

    // 请求体
    let arr = [];
    req.on('data',function (chunk) {
        arr.push(chunk);
    });
    req.on('end',function () {
        console.log(Buffer.concat(arr).toString());
        // 要让服务器和客户端说 当前发送完毕
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')


        res.end('结束了'); // write + close
    })
});
// 服务器：在特定的 ip地址 和 端口65535 不要使用低于3000 上 监听客户端的请求
// server.on('request', function (req, res) { // req 代表的是客户端  res就是服务端
//     console.log('请求到来1')
// })
let port = 3000
server.listen(port, function () {
    // 如果3000被占用了 3001
    console.log('server start ' + port);
});
// 当端口被占用 重新启动即可
server.on('error', function (err) {
    if (err.errno === 'EADDRINUSE') {
        port++;
        server.listen(port)
    }
})
// npm install  nodemon -g 


// 客户端 =》 服务端通信 

// 静态服务


// http-server npm 发布