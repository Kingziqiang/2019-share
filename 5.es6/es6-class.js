class Animal{
    constructor(){
        this.name = '熊猫'
    }
    // Animal.a = 123;
    // 静态属性
    static get a(){ // 属性访问器 只能类用
        return this.flag;
    }
    static set a(newVal){ // 属性访问器
        this.flag = newVal
    }
    // set a(newVal){ }
    // Animal.prototype.a = 456
    get a(){ // 原型上的属性 只能实例用
        return 456;
    }
    say(){

    }
    eat(){

    }
}
Animal.flag = 'zzz';
Animal.a = 'hello';
console.log(Animal.a)

// es6 结束 node

// 10月9号上周 周三
// call bind apply

//  vue 源码 koa 源码  源码