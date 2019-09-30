let fs = require('fs');
// 房东 先将房子 挂载中介上
// 发布订阅的好处 可以解耦和

// 发布订阅 和 观察者模式的区别(基于发布订阅的) vue 观察者模式 es6的用法
let school = {}; // vue eventBus
let event = {
    arr:[], // 中介
    on(fn){
        this.arr.push(fn); // 把函数存到数组中
    },
    emit(){
        this.arr.forEach(fn=>fn()); // 发布
    }
}
event.on(function(){
    console.log('读取一次')
})
event.on(function(){
    // 订阅 ['name',age]
    if(Object.keys(school).length === 2){
        console.log(school);
    }
})
fs.readFile('./name.txt','utf8',function(err,data){
    school['name'] = data;
    event.emit(); // 发布
})
fs.readFile('./age.txt','utf8',function(err,data){
    school['age'] = data;
    event.emit(); // 发布
})