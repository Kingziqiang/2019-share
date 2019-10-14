// 合并选项 考虑类型 
// {a:1} {a:2} => {a:2}
// [1,2] [3,4] => [1,2,3,4];
// 1  2 => 2
function mergeOptions(o1,o2) {
    // 如果两个类型不相等直接返回o2即可
    if(typeof o1 !== typeof o2){
        return o2; 
    }
    //下/ 在严格判断一 在判断是否是同种类型
    if(o1.constructor !== o2.constructor){
        return o2
    }
    if(typeof o1 !== 'object'){ // 如果基本类型直接return o2
        return o2;
    }
    // 数组   或者对象
    if(Array.isArray(o1)){ // 数组情况
        return [...new Set([...o1, ...o2])]
    }
    // 其他情况就是对象
    let mergeObj = {};
    let k1 = Object.keys(o1); // ['a'];
    let k2 = Object.keys(o2); // ['a','b']
    [...k1,...k2].forEach(key=>{ // 对象的情况
        mergeObj[key] = mergeOptions(o1[key], o2[key]);
    })
    return mergeObj;
}
let obj1 = {a:1,q:[1,2,3],a:{a:100,c:[1,2]},p:9};
let obj2 = {a:2,b:3,q:[4,5],a:{a:200,c:[4,5],p:9}};
let obj = mergeOptions(obj1,obj2);
console.log(obj);