// @log1(1)
// @log2(2)
class Animal {
    // static a = 1; // 静态属性 es7语法 给类增加一个属性 a =1
    @readonly a = 1 // 不是给原型上增加a 
    // static get a(){ // 给原型添加的
    //     return 1
    // }
    @before say() {
        console.log('say')
    }
}
let animal = new Animal;
// 如何查看一个属性是实例上的还是原型上的
console.log(animal.hasOwnProperty('a'));

function readonly(proto, key, descriptor) {
    descriptor.writable = false;
}
function before(proto, key, descriptor) {
    let old = descriptor.value;
    descriptor.value = function () {
        console.log('xxx');
        old();
    }
}
animal.say();
// function log1(target) { // 如果写在类的上面 ，第一个参数就是这个类
//     console.log('3')
//    return function () {
//         console.log('1')
//    }
// }
// function log2(target) { // 如果写在类的上面 ，第一个参数就是这个类
//     console.log(4);
//     return function () {
//         console.log('2')
//     }
// }
// 装饰器 @ 草案中  vue2.0 + ts

// @ 可以装饰类
// 装饰类中的属性和方法 