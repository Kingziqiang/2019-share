const fs = require('fs');
const EventEmitter = require('events');
class ReadStream extends EventEmitter{
    constructor(path,options = {}){
        super();
        // 1) 写类 需要将属性都挂到实例上，这样可以保证在其他原型方法上使用这些属性
        this.path = path;
        this.flags = options.flags || 'r';
        this.mode = options.mode || 438;
        this.autoClose = options.autoClose || true;
        this.start = options.start || 0;
        this.end = options.end;
        this.highWaterMark = options.highWaterMark || 64*1024;
        this.pos = this.start;
        // 1) 先打开文件
        this.open();
        this.on('newListener',(type)=>{
            if(type === 'data'){
                // 说明用户监听了data事件
                this.read(); // 调用read方法
            }
        });
    }
    open(){
        fs.open(this.path,this.flags,(err,fd)=>{
            if(err){
                return this.emit('error',err)
            }
            this.fd = fd;
            this.emit('open',fd)
        })
    }
    read(){ // 发布订阅
        if(typeof this.fd !== 'number'){
            return this.once('open',this.read)
        }
        // 创建一个buffer 用来写入
        let buffer = Buffer.alloc(this.highWaterMark)

        fs.read(this.fd, buffer, 0, this.highWaterMark, this.pos, (err,bytesRead)=> {
            if(bytesRead){
             this.pos += bytesRead;
             this.emit('data', buffer);
             this.read();
            }else{
                this.emit('end');
                this.close();
            }
        })
    }
    close(){
        fs.close(this.fd, ()=> {
            this.emit('close');
        })
    }
   
}
module.exports = ReadStream;
