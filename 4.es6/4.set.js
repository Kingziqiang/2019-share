// set代表的就是集合  map  hash表
// 集合就是不能有重复的项目 数组去重 new Set
// generator => iterator
// let set = new Set([1,2,3,3,2,1]); // 他的key 和值时一样的
// 无论什么数据类型 增删改查
// console.log(set.values());
// set.forEach(item => {
//     console.log(item);
// });

// 如何求两个数组 的并集  差集  交集
let arr1 = [1,2,3];
let arr2 = [3,4,5]; // [...arr1,...arr2]
// set是可以被迭代的 [...set]

// 1)并集
// let set = new Set([...arr1,...arr2]);
// let union = [...set];

// 2)交集
// let s1 = new Set(arr1);
// let s2 = new Set(arr2);
// let intersection = [...s1].filter(item=>{ // 1,2,3  如果返回true 就保留到新的数组中
//     return s2.has(item);
// })
// console.log(intersection);

// 差集
let s1 = new Set(arr1);
let s2 = new Set(arr2);
let intersection = [...s1].filter(item=>{ // 1,2,3  如果返回true 就保留到新的数组中
    return !s2.has(item);
});
console.log(intersection);



// Object.keys() Object.values() Object.entries()
// let obj = { //Symbol 11种方法  Reflect 13种
//     a:1,
//     b:2,
//     [Symbol()]: 1// 独一无二 将Symbol作为对象的key属性
// }
// console.log(obj);
// 我们可以通过这些es5 的方法 来获取值  默认对象 keys只能取普通的 不包括symbol,getOwnPropertySymbols只能取symbol
// 以后所有的Object.xxx 都会变成Reflect.xxx
// console.log(Reflect.ownKeys(obj));

// 元编程 改变 js的原有功能

