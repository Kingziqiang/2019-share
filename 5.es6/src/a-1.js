// export const a = 1;

let a = 1;
let b = 2;
let c = 'hello'
setInterval(()=>{
    c++;
},1000)
export {// 接口列表
    a,
    b,
    //c as default // 把c 的结果作为默认值导出
}

export default 'hello'; // 导出的是值
// export {a};
// import {a} from './xxx';
// import * as obj from './xxx'

// export default {};
// export {obj as default}
// import {default as _ } from 'xxx';
// import _ from 'xxx';