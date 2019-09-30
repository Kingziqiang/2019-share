// generator 是生成器
// KOA1.0用的就是generator => async + await
// redux-saga  dva (generator)
let fs = require('fs').promises;

function * read(){
    try{
        // 我们处理 yield 后面是否 跟的是promise
        let filename =  yield fs.readFile('./name.txt','utf8');
        let age = yield fs.readFile(filename,'utf8');
        // let newAge =  yield  {a:'我今年' + age+'岁了'}
        return age;
    }catch(e){
        console.log(e);
    }
}
// let co = require('co');
function co(it){
    return new Promise((resolve,reject)=>{
        // 异步调用 我要等待第一个next 执行完后 在调用第二个
        function next(data){ // 异步的递归 next方法
           let {value,done} =  it.next(data);
           if(done){
                resolve(value); // 最终的结果抛出来了
           }else{
                Promise.resolve(value).then(data=>{
                    next(data);
                },err=>{ // 如果出错将错误抛出来
                    it.throw(err);
                })
           }
        }
        next();
    })
}


// co(read()).then(data=>{
//     console.log(data);
// });


// es7 语法 async + await


async function read(){ // async 函数的执行结果 就是promise
    //try{
        // 我们处理 yield 后面是否 跟的是promise
        let filename =  await fs.readFile('./name1.txt','utf8');
        let age = await fs.readFile(filename,'utf8');
        // let newAge =  yield  {a:'我今年' + age+'岁了'}
        return age;
    // }catch(e){
    //     console.log(e);
    // }
}
read().then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});

// nodejs async + await
// let it = read();
// let {done,value} = it.next()
// value.then(data=>{
//     let {value,done} = it.next(data)
//     value.then(data=>{
//         let {value,done} = it.next(data);
//         console.log(value,done)
//     })
// },err=>{
//     it.throw(err);
// })


// function *read(){ // generator 生成的是迭代器
//     try{
//         let a = yield 'nodejs'; // 产出
//         console.log(a);
//         let b = yield 'react';
//         console.log(b);
//     }catch(e){
//         console.log(e);
//     }
// }
// // 迭代器
// let it = read();
//  // {value,done}
// it.next(); // 第一次的next参数是无意义的
// it.next('hello'); // 之后的next的参数 会作为上一次yield的返回值
// it.next('world');


// 有兴趣 可以自己实现 一个

function * read(){

}
// 转化成普通函数 ast语法树

// saga generator 实现saga 

function * read(){
    yield 1;
    yield 2
}
function * r(){
    yield * read();// 在一个generator中 调用另一个generator
    yield 3;
    yield 4
}
let it = r()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


// 事件环


let p = new Promise((resolve,reject)=>{
    reject();
    resolve();
});
p.then(()=>console.log('成功'),()=>console.log('失败'));



const promise = new Promise((resolve,reject)=>{
    console.log(1);
     resolve();
    console.log(2);
})
promise.then(()=>{
    console.log(3);
})


Promise.resolve(1)
.then(x=>x+1)
.then(x=>{throw new Error('My Error')})
.catch(()=>1)
.then(x=>x+1)
.then(x=>console.log(x))
.catch(console.error)





// promise 中的链式调用如何中断?  return new Promise()
// promise有哪些缺点？ 优点Promose.all 链式调用 ,他还是基于回调 promise不能中断 fetch发送请求 他也不能中断 axios

