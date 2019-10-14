// 箭头函数的特点 没有 this 没有 arguments 没有 prototype
let a = 100;  // 不会污染全局变量的
let obj = {
    a:1,
    say:()=>{
        setTimeout(()=>{
            console.log(this.a); // window
        }, 1000);
    }
}
obj.say(); // 谁调用此方法this就是谁 
// 没有this 就向上查找

let say = (...arguments) =>{
    console.log(arguments)
}
// console.log(new say()); // 不能new 因为没有prototype
// 箭头函数中没有 protptype
say(1,2,3);