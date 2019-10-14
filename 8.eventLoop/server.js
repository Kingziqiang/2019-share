let http = require('http');
http.createServer(async (req,res)=>{
    if(req.url === '/add'){
        // 异步api
       await new Promise((resolve, reject) => {
           setTimeout(() => {
              res.end('ok')
           }, 10000)
       });
    }else{
        res.end('xxx');
    }
}).listen(3000);
