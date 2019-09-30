// 缺点 兼容性差, vue 重写defineProperty

// proxy 代理 
let obj = { // 如果你是循环代理的 ，先代理最为层
    name:'zf',
    age:{a:100}
};
// let obj = Object.freeze({a:1})
// let flag = Reflect.defineProperty(obj,'a',{
//     value:100
// });
// console.log(obj,flag);
// 产生新的api 
let handler = {
    set(target,key,value){ // 如果是数组 长度变化 是不需要更新的
        if(key === 'length')return true; // 没有对长度做任何事
        console.log('更新',key);
        // target[key] = value; // 目的是更新操作
        // set 是要求有返回值的 boolean 需要返回
        return Reflect.set(target,key,value);
    },
    get(target,key){
        if(typeof target[key]=== 'object'){
            return new Proxy(target[key],handler)
        }
        return Reflect.get(target,key);
    }
}
// let proxy = new Proxy(obj,handler);
// Object.defineProperty
// 当我取值的时候将属性 进行代理 ，返回代理的结果
// proxy.age.a = 'hello';

let arr = [1,2,3,4];
let proxy = new Proxy(arr,handler);
proxy.push(123);
console.log(arr.length);

// es6的模块 webpack环境
// webpack webpack-cli webpack-dev-server html-webpack-plugin