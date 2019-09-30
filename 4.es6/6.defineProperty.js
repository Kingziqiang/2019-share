// Object.defineProperty es5
// 定义属性 Object.freeze()
let obj = {name:'zf'};
let val = 'zf';
// vue  数据劫持 数据量非常大
// Object.freeze(obj); // 用了此方法 这个对象不能增加get 和set
// 属性描述器
let descriptor = Object.getOwnPropertyDescriptor(obj,'name')
if(descriptor.configurable !== false){
    Object.defineProperty(obj,'name',{
        configurable:true, // 是否可配置 这个属性是否能被删除
        enumerable:false, // 可枚举 es6类 原型方法 ，不可枚举 表示不能被for in 所迭代
        get(){
            return val;
        },
        set(newVal){
            val = newVal
        }
    })
}
obj.name = 'hello'
// delete obj.name;
console.log(obj.name);


// 功能就是基于Object.defineProperty的
let obj = { // 属性访问器
    _val:'',
    get name(){
        return this._val
    },
    set name(newVal){
        this._val = newVal
    }
}
obj.name = 'hello';
console.log(obj.name);

// 1) 实现一下 数据接触
// 2) Proxy 代理
// 3) es6中的模块 对比commonjs规范
// 4) class 继承  怎么去实现继承 怎么去实现 new

// 周三 五  10.1   29号放假   9 号放假
// mergeOptions 
// 每周 日 都有 1-2 个小时复习课 

