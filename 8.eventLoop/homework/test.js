let obj = {
    [Symbol.hasInstance](){ // 将原方法进行了改写
        return true;
    },
    [Symbol.toPrimitive](type){ // valueof toString
        console.log(type);
        return 100;
    },
    get [Symbol.toStringTag](){ // 重写toString方法
        return 'jw'
    }
}
let a = 'a';
console.log(a instanceof obj);


console.log(Object.prototype.toString.call(obj));
// Symbol 有11种方法