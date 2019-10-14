// set 集合 集合的特点 是不重复 对象的key 就是不重复的
class Set{
    constructor() {
        this.obj = {}
    }
    hasOwn(element) {
        // Reflect.ownKeys(this.obj)
        return this.obj.hasOwnProperty(element);
    }
    set(element){
        if(!this.hasOwn(element)){
            this.obj[element] = element
        }
    }
}
let s = new Set();
s.set(1);
s.set(1);
console.log(s);
// 如果重复的 就不在增加了