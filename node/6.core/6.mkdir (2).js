// fs中除了文件的操作之外 还经常会操作文件夹 
// 使用linux 命令 mkdir


let fs = require('fs');
// 同步创建目录
// function mkdirSync(p){
//     let arr = p.split('/');
//     for(let i = 0; i < arr.length ; i++ ){
//         let current = arr.slice(0, i + 1).join('/');
//         if (!fs.existsSync(current)){
//             fs.mkdirSync(current);
//         }
//     }
// }
// mkdirSync('a/b/c/d');

// 异步创建目录

function mkdir(p,cb){
    let arr = p.split('/');
    let index = 0;
    function next(){
        if (index == arr.length) return cb();
        let current = arr.slice(0, ++index).join('/'); //  当前的路径
        fs.stat(current,function (err) {
            if(err){ //  如果有错误 就有err
                fs.mkdir(current,function () {
                    next();
                })
            }else{
                next();
            }
        })
    }
    next();
}
mkdir('a/b/c/d/e',function () {
    console.log('异步创建成功')
});
