// import {b} from './b';
// import {c} from './c';
// export {
//     b,
//     c
// }
// 导入并导出 不能使用 b和c 模块中的内容,不能再使用 这两个文件的内容，因为立即被导出了
export * from './b';
export * from './c';


// 如果导出变量同名 以第一个为准