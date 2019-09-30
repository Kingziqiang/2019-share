const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
// resolvePromise尽可能写的完整一些，可能夹着别人的promise的逻辑
function resolvePromise(promise2, x, resolve, reject) {
  // x 来取决 promise2 是成功还是失败
  // 为了保证错误代码出现
  if (x === promise2) {
    return reject(
      new TypeError(
        "TypeError: Chaining cycle detected for promise #<Promise>11"
      )
    );
  }
  // 怎么判断 x 是不是一个promise
  // 判断x 是不是一个promise 如果x是常量 那就直接用这个结果将promise 成功掉即可
  let called;
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    // {}.then x有可能定义了then方法 Object.defineProperty
    // 有可能是promise
    try {
      let then = x.then; // 取then 可能发生异常
      if (typeof then === "function") {
        // 这里就只能任务他是一个promise
        then.call(
          x,
          y => {
            // 用刚才取出来的then方法继续使用，不要再次取then方法了
            if (called) return; // 调用成功后 就不能再调用失败
            called = true;
            resolvePromise(promise2, y, resolve, reject);
            // 递归解析当前x的promise的返回结果，因为promie成功后可能返回的还是一个promise
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        // {}
        resolve(x); // 普通值
      }
    } catch (e) {
      if (called) return; // 如果调用了失败 就把值改成true 如果再次调用 就屏蔽掉他
      called = true;
      reject(e);
    }
  } else {
    // 普通的字符串 number bool
    resolve(x);
  }
}
class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    let resolve = value => {
      // 如果value 是一个promise的话 需要继续解析这个值
      if(value instanceof Promise){ // 不能判断有没有then 否则测试过不去
        return value.then(resolve,reject); // 递归
      }
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
        this.resolveCallbacks.forEach(fn => fn());
      }
    };
    let reject = reason => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.rejectCallbacks.forEach(fn => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  // x 是当前then 成功或者失败函数的返回结果
  // x是不是一个普通值如果普通值 把值直接传递到下一个then中
  // x是一个promise ？ 我需要采用这个x的状态
  // 如果 执行函数出错，直接调用promise2的失败
  then(onFufilled, onRejected) {
    onFufilled = typeof onFufilled === "function" ? onFufilled : val => val;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : err => {
            throw err;
          };
    // promise2 要等待当前这次new的promise 执行完后 才能获取到
    let promise2 = new Promise((resolve, reject) => {
      // 此函数会立即执行
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFufilled(this.value);
            // 看x的返回结果，看一下x 是不是promise，在去让promise2 变成成功或者失败
            resolvePromise(promise2, x, resolve, reject);
            // resolve(x);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.status === PENDING) {
        this.resolveCallbacks.push(() => {
          // todo...
          setTimeout(() => {
            try {
              let x = onFufilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.rejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });
    return promise2; // 实现链式调用
  }
  catch(errCallback){
    return this.then(null,errCallback)
  }
  static reject(reason){
    return new Promise((resolve,reject)=>{
      reject(reason);
    })
  }
  static resolve(value){
    return new Promise((resolve,reject)=>{
      resolve(value);
    })
  }
}
// 必须测试前 要加这一段代码
Promise.defer = Promise.deferred = function() {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
module.exports = Promise;

// sudo npm install promises-aplus-tests -g 这个是帮我们测试的包

// primise.all race finally
// 10。7号 之前搞定他