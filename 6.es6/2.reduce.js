// reduce 收敛 把一个数组 转化成 一个值
// 使用reduce 数组不能为空
[1, 2, 3].reduce((prev, next, index, current) => {
    return prev + next
}); // 第二个参数 是指定数组的第一项

let r = [{count: 3,price: 5},{
    count: 3,
    price: 5
}].reduce((prev,next)=>{
    return prev + next.count * next.price
},0)
console.log(r);

// 扁平化  实现flat 这个方法
let r1 = [1,[2,[3,[4,[5]]]]].flat(3);
console.log(r1); // reduce 来实现


// compose 组合函数 把多个函数组合在一起

function sum(a,b) { // 求和
    return a+b;
}
// 求上一次结果的长度
function len(str) {
    return str.length
}

function addCurrency(str) {
    return '$' + str
}
// function compose(...fns) {
//     return function (...args) {
//         let lastFn = fns.pop()
//         return fns.reduceRight((prev,next)=>{
//             return next(prev); // 6
//         }, lastFn(...args)); // abcmpq
//     }
// }
// let compose = (...fns) =>(...args)=>{
//     let lastFn = fns.pop()
//     return fns.reduceRight((prev, next) =>  next(prev) , lastFn(...args)); // abcmpq
// }

// 顺序讲解 1:
// prev: addCurrency next: len

// return function (...args) {
//     return addCurrency(len(...args))
// }
// // 这个结果会作为下一次的prev

// prev: function (...args) {
//     return addCurrency(len(...args))
// }

// next: sum

// return function (...args) {
//     return addCurrency(len(sum(...args)))
//     return function (...args) {
//         return addCurrency(len(...args))
//     }(sum(...args))
// }

// 实现redux compose方法的

// function compose(...fns) {
//     return fns.reduce((a,b)=>{ // 通过reduce 实现了返回函数
//         return function (...args) {
//             return a(b(...args))
//         }
//     })
// }
let compose = (...fns) => fns.reduce((a, b) => (...args)=>a(b(...args)))
// compose()
let r2 = compose(addCurrency,len, sum)('abc','mpq');
// addCurrency(len(sum('xyz', 'mpq')))
console.log(r2);


// 实现一个reduce方法 
Array.prototype.reduce = function (callback,prev) {
    
}
// 自己实现一个reduce