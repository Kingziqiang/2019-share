// 链表
class Node{
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkList{ // 存什么？
    constructor(){
        this.head = null; // 头
        this.length = 0; // 链表的长度
    }
    append(element){
        let node = new Node(element);
        if(!this.head){
            this.head = node;
        }else{
            let current = this.head; // 开头
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    insert(position,element){
        if (position >= 0 && position < this.length){
            let node = new Node(element);
            if(position === 0){
                let oldNode = this.head;
                this.head = node;
                node.next = oldNode
            }else{
                // position  element
                let current = this.head;
                let previous = null;
                let index = 0;
                while (index++ < position){
                    previous = current;
                    current = current.next
                }
                previous.next = node;
                node.next = current;
            }
            this.length++;
        }
    }
}
// 方便对联表中的元素进行操作
let linklist = new LinkList();
linklist.append('1');
linklist.append('2');
linklist.append('3');
linklist.insert(1,'hello');
console.log(linklist);

