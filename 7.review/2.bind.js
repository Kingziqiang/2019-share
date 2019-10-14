// bind 绑定this

function fn1() {
    console.log(this);
}
// bind 内部调用了call方法  改变了this指向 
Function.prototype.bind = function(context){
    // this = fn1
    let that = this;
    return function () {
        that.apply(context); // 1
    } // 2
}
let bindFn = fn1.bind(1); // 第一次bind 绑定的是
bindFn = bindFn.bind(2); // 第二次bind
bindFn(); // 多次bind 只能执行一次

// vue3 没有 this
