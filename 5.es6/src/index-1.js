// 模块 为什么要有模块？
// 按功能划分项目结构 可以保证命名不冲突 ,方便维护

// esModule es6模块  (import export) 静态模块 es7也支持了动态引入
// commonjs规范 node的模块 (require module.exports)  动态模块
// requirejs AMD seajs CMD   (umd)
// 如果使用 export const a = 1;
// import {a} from './a.js';
// as表示重命名

// export default 导出的结果 可以直接使用 import xxx from 'xxx'
// import _,* as obj from './a.js';
// import 会有声明的特点 
// import {default as _} from './a'
import _ from './a-1'
// setInterval(()=>{
    console.log(_); // export他导出的是接口，值变了 会更新的 
// },3000)

// console.log(_);
