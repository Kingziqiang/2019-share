
// 只能放到最外层作用域
import {d} from './a'; // 类似函数 可以提前变量提升
// _ = 'world'; // 不能修改导出后的结果

console.log(d) ; 

// 有很多模块 
let btn = document.createElement('button');
// bundle.js  
btn.addEventListener('click',function(){
    // import()语法 返回的是一个promise ，我们可以拿到结果中的default 就是默认导出的结果 import * as res from './'
   
    import('./d').then((res)=>{ // default 关键字
        new res.default().show();
        console.log(res)
    }); // 异步组件
});

document.body.appendChild(btn);