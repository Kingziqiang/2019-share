// es5继承
// 定义一个类 实例属性 、 原型属性

function Animal() {
    this.name = '动物' // 实例属性 
}
Animal.prototype.say = function () {
    console.log('说话')
}
// 1） 继承实例属性
function Tiger() {
    Animal.call(this); // 调用父类构造函数改变this指向
}
// Tiger.prototype = Animal.prototype; // 这个叫混合
// 2) 继承公共属性
// Tiger.prototype.__proto__ = Animal.prototype  IE不支持直接操作__proto__
// Object.setPrototypeof(Tiger.prototype,Animal.prototype)
function create(parentPrototype) {
    function Fn() {}
    Fn.prototype = parentPrototype;
    return new Fn()
}
// 3) Object.create方法实现继承公共属性
Tiger.prototype = Object.create(Animal.prototype,{constructor:{value:Tiger}});
let tiger = new Tiger;
console.log(tiger.name);

// Es6 的类 实现继承 是靠  call + Object.create = extends

// 每个类都有prototype 对象   每个人都有 __proto__ 指向的是所属类的原型
// console.log(animal.__proto__ === Animal.prototype);
// console.log(animal.__proto__.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__); // 根了
// console.log(Object.__proto__ === Function.prototype); //对象的链函数的原型
// console.log(Function.prototype.__proto__== Object.prototype);
// // __proto__ 查找属性和方法的
// console.log(Function.__proto__ === Object.__proto__);

/// constrctor 定义在原型上的
// console.log(Animal.prototype.constructor === Animal)
