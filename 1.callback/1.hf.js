// 异步编程  高阶函数:
// 高阶函数1）你可以将函数当做另一个函数的参数传入 2) 如果一个函数 返回一个新的函数那么这个函数也是高阶函数

// 高阶函数的解决的问题

// 核心功能,封装起来 不对他进行更改

// 装饰模式，AOP 切片
Function.prototype.before = function(cb){
    // 箭头函数中没有arguments
    // ... 剩余运算符 把所有的内容 都变成一个数组
    return (...args) => { // 箭头函数中没有this指向  this 会像上一层查找
        cb();
        this(...args); // 将数组全部展开传入
    }
}

function makeCoffee(who,a){// 核心创建coffee 的方法
    console.log('创建一杯咖啡给'+who,a)
}
// this表示 谁调用此函数 this就是谁
let newFunc = makeCoffee.before(function(){
    console.log('加糖')
});

let newFunc1 = makeCoffee.before(function(){
    console.log('加奶')
});
newFunc('老板','员工');
newFunc1('员工');

// react中的事务,在某个函数之前 执行一些功能，在之后也可以增加一些功能