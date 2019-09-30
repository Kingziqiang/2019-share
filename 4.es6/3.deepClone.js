// 可以实现深拷贝
// let obj = {name:'zf',age:{count:10},r:undefined};
// // 借用了stringify转换成一个字符串 再将这个字符串 转换成对象
// let newObj = JSON.parse(JSON.stringify(obj));
// console.log(newObj); // 不支持函数 日期 正则 undefined

// 自己实现深拷贝 (类型判断) 递归 拷贝对象 (函数一般补拷贝)
function deepClone(obj,hash = new WeakMap()){
    // null 和 undefined 在 == 号的情况下相等
    if(obj == undefined) return obj;
    // 数据类型 string number boolean symbol
    if(typeof obj !== 'object') return obj;
    // 正则 日期 typeof  对象
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    // [] / {}  cloneObj
    let val = hash.get(obj); // 如果映射表中存在 直接将结果返回
    if(val){ // 递归要有终止条件 这个就是终止条件
        return val
    }
    let cloneObj = new obj.constructor; // 去当前传入对象的构造函数
    hash.set(obj,cloneObj); // 如果不存在就创建映射
    for(let key in obj){ // 无论是对象还是数组 都可以循环
        if(obj.hasOwnProperty(key)){ // 只要实例上的属性 
            // 有可能 当前每一项中 内部还是一个引用类型
            // 做一个映射关系 把他存起来
            // 数据结构 队列 栈 链表 集合set hash表 树 图
            cloneObj[key] = deepClone(obj[key],hash);
        }
    }
    return cloneObj;
}
let obj = {a:1};
obj.b = obj;
console.log(deepClone(obj));
// let arr = [1,2,3,[4]]
// let newArr = deepClone(arr);
// newArr[3][0] = 100;


// let a = 1;
// {
//     console.log(a); // 不会像上级作用域下查找
//     let a = 1; // 这个a 已经在我们这个作用域绑定好了
// }
