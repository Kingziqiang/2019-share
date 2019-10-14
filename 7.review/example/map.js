// map hash表 松散的  hash表查找数据库快 ，可以直接通过索引查找

class  Map {
    constructor(){
        this.arr = [];
    }
    calcKey(key){
        // v-for="item of items"
        let hash = 0
        for(let k of key){ // 更复杂的运算
            hash+=k.charCodeAt();
        } 
        return hash%100
    }
    set(key,value){ // 前端数据结构
      let k = this.calcKey(key);
      this.arr[k] = value;
    }
    get(key){
        let k = this.calcKey(key);
        return this.arr[k];
    }
}

let map = new Map(); // es6 map 
map.set('olleh','world1');
map.set('hello', 'world2'); // {map:链表}
map.set('world','hello');
console.log(map.get('world'))