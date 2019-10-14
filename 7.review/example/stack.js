class Stack {
    constructor() {
        this.arr = []
    }
    push(element) { // 入队列
        this.arr.push(element);
    }
    pop() {
        return this.arr.pop();
    }
}
let stack = new Stack();

// 链表 队列 性能不好
// node 流 多个异步 并发执行
// 100个 写入操作向 同一个文件中写入 链表的方式