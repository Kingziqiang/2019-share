## Promise.resolve方法的实现
```javascript
Promise.resolve = (val) => {
    return new Promise((resolve, reject) => {
        resolve(val)
    })
}
```

## Promise.reject方法的实现
```javascript
Promise.reject=(reason)=>{return new Promise((reject)=>{reject(reason)});}
```

## Promise.race方法实现
```javascript
Promise.race = function(values){
    return new Promise((resolve,reject)=>{
        for(let i = 0 ; i < values.length;i++){
            let current = values[i];
            if(isPromise(current)){
                current.then(resolve,reject);
            }else{
               resolve(current);
            }
        }
    })
}
```

## Promise中catch的实现

```javascript
Promise.prototype.catch=(onRejected)=>{return this.then(null,onRejected)}
```

## Promise.try
```javascript
const f = () => console.log('now');
(
    () => new Promise(
        resolve => resolve(f()); // f()函数同步执行 可以捕获同步错误
    )
)().catch(err=>{
    console.log(err)
})
console.log('next');
```

## 简述Promise的执行机制和原理
- 可以扩展出promise的优点和缺点

## 运行题
```javascript
const p = Promise.resolve();
(() => {
    await p;
    // console.log('after:await ')
    // const implicit_promise = new Promise(resolve => {
    //     const sync1_promise = new Promise(res => res(p));
    //     sync1_promise.then(() => {
    //         console.log('after:await');
    //         resolve();
    //     });
    // });
    // return implicit_promise;
})();

p.then(() => {
    console.log('tick:a');
}).then(() => {
    console.log('tick:b');
}).then(() => {
    console.log('tick:c');
})
```