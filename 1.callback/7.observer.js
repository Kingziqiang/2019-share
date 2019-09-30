// 有一个观察者 被观察者
class Subject { // 被观察者  vue 观察者模式 eventBus 发布订阅
    constructor(){
        this.arr = []; // 数组中存放的是观察者的实例
        this.state = '开心';
    }
    setState(newState){
        this.state = newState;
        this.arr.forEach(o=>o.update(this))
    }
    attach(o){ // 挂载观察者
        this.arr.push(o);
    }
}
class Observer{ // 观察者
    constructor(name){ this.name = name;}
    update(s){ // 当前被观察者的状态发生了变化，需要更新状态了
        console.log(s.state+'对:'+this.name)
    }
}
let s = new Subject('小宝宝');  // 创建被观察者
let o1 = new Observer('我'); // 创建两个观察者
let o2 = new Observer('媳妇');
s.attach(o1);
s.attach(o2);
s.setState('不开心')
// 1) 将观察者 放到被观察者之上
// 2) 我家里有个姑娘 （开心）
// 3) 我和我媳妇
// 4) 状态变化了 -》 告诉观察者 我哭了 (发布订阅)