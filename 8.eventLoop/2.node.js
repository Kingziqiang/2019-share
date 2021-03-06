// node 能干什么？ vue react webpack
// 可以帮前端写一些工具库
// node 中间层 基于javascrpt 运行时runtime (js DOM BOM ECMASCRIPT) node中只包含了 ECMASCRIPT + 内置的模块（fs） 创建高性能的web服务  
// 安全性和稳定 java (I/O密集) 文件的读写，计算（cpu密集） node是单线程
// node是可以直接充当服务端的 eggjs

// nodejs 单线程(I/O密集) 异步非阻塞i/o 事件驱动  node 可以实现高并发 （同一时间内多个请求）

// 多线程的好处 就是可以同一时间 同时处理多个请求，通过时间片切换 切换时间浪费性能，如果做cpu密集型的 不需要等待

// web服务 调取接口 访问文件 node 适合这种场景 i/o 场景
// 但是如果做复杂的事情 可能会导致阻塞， node支持子进程 在开启进程来处理
// 电脑 4核 如果单线程 单进程无法利用多核cpu 开启多个进程

// 多线程 同步 阻塞
// 单线程 异步 非阻塞
// 进程 开启多个 >  进程是有一个主线程 > 异步非阻塞 libuv靠的是多线程，通过多线程来实现了异步 v8引擎
// 11.13.0

// 会把 常用的api 都用到