class Queue{
    constructor(){
        this.arr = []
    }
    enqueue(element){ // 入队列
         this.arr.push(element);
    }
    unqueue(){
        return this.arr.shift();
    }
}
let queue = new Queue();
// 增删改查的方法

queue.enqueue(1);
queue.enqueue(2);
queue.unqueue();
console.log(queue.arr);

// 栈 函数执行
// 调用栈
function a() {
    function b(){
        function c(){

        }
        c();
    }   
    b();
}
a();