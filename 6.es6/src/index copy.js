class Animal{
    constructor(name) {
        this.name = name;
        // 类的实例化检查
        if(new.target === Animal){
            throw new Error('not new')
        }
    }
    static a(){
        return 100
    }
    say(){
        console.log('say')
    }
}
// 不能被实例化的类就是抽象类
// call + Object.create  __proto__
class Tiger extends Animal{
    constructor(name) {
        super(name); // Animal.call(this)
    }
    static get a(){ // Object.defineProperty简写
       // 这里的super ？ 
    }
    say(){ // super是父类的原型
        super.say(); // Animal.prototype
    }
    static a(){ // 静态方法中的super指向的是父类
        return super.a()
    }
}
let tiger = new Tiger('老虎');
// console.log(tiger.a)
// 抽象类 可以被继承 但是不能被new