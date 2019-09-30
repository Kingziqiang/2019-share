const PENDING = "PENDING"; // 宏
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
class Promise {
  constructor(executor) {
    // executor会立即执行
    this.status = PENDING;
    this.value = undefined; // 成功的值
    this.reason = undefined; // 失败的原因
    let resolve = value => { // 每个promise 都有自己的成功和失败,不是公共的
      // value表示成功的原因
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    };
    let reject = reason => {
      // reason表示失败的原因
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    };
    try{
        executor(resolve, reject);
    }catch(e){
        reject(e);
    }
  }
  then(onfulfilled,onrejected){
    if(this.status === FULFILLED){
        return onfulfilled(this.value)
    }
    if(this.status === REJECTED){
        return onrejected(this.reason)
    }
  }
}
// node 中的模块的写法,commonjs规范
module.exports = Promise;
