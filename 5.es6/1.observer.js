// get set 给每一个对象都增加 get和set
let obj = { // 我需要递归如果是对象 就需要增加get 和set
    name:'zf',
    age: {} 
    // proxy  es6的 好处就是不要重写对象 set / get 
    // 如果属性不存在 defineProperty无法监控 proxy可以解决
    // 数组的方法无法监控 proxy也能监控到
}
function update(){
    console.log('update');
}
function observer(obj){
    if(typeof obj !== 'object'){
        return;
    }
    for(let key in obj){
        // obj , age , {a:100}
        defineReactive(obj,key,obj[key]);
    }
}
function defineReactive(obj,key,value){
    observer(value); // 递归添加set和get
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get(){
            return value;
        },
        set(newVal){
            if(typeof newVal === 'object'){
                observer(newVal)
            }
            update(); //视图更新
            value = newVal;
        }
    });
}
obj.q = 13
let arr = [1,2,3]; // 如果数据类型是数组的话 是无法监控到变化的
// 他的原理就是将 shift unshfit 重写掉
observer(arr);
arr.push(4);


// obj.age = {a:200}
// obj.age.a = 3000;
// console.log(obj.age.a)