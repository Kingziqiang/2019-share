// 解构(key)赋值 ...(剩余运算符 , 展开运算符)
// 改名: 默认值=
let {name:name1,age,address='回龙观'} = {name:'zf',age:10}
console.log(name1,address);
let [n,a] = ['珠峰',10];
console.log(n,a); 
// 对象里面套数组 数组里套对象
let {school:{count}} = {school:{count:100}};
console.log(count)

// 1)... 剩余运算符,只能放到最后一项
let [,...args] = ['珠峰','10','回龙观'];
let {name,...obj} = {name:'zf',age:10,address:'回龙观'};
console.log(obj);

// 2) ... 方法传递参数连用,可以把对象或者数组展开
let r = Math.max(...[1,2,3,5]);
console.log(r);

let arr1 = [1,2];
let arr2 = [2,3];  // [...arr1,...arr2]

let obj1 = {name:{a:1}};
let obj2 = {age:10,name:{b:2}}; // {...obj1,...obj2}
mergeOptions(obj1,obj2) // {age:10,name:{a:1,b:2}}
// 实现一个方法 做一个 mergeOptions
console.log({...obj1,...obj2});

// 对象的展开 数组的展开 浅拷贝
// 浅拷贝 拷贝的是引用地址 深拷贝 拷贝地址中的内容
// 数组中的slice
let arr = [1,2,3,[4]]; // slice是浅拷贝，截取的是引用地址
let newArr = arr.slice(3);
newArr[0][0] = 100;
console.log(arr);

let obj = {name:'zf',age:{a:1}}
let newObj = {...obj}
newObj.age.a = 1000;
console.log(obj);
