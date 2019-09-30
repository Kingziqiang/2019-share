// export default 'hello'; // 默认导出hello

class Dialog{
    show(){
        console.log('todo');
    }
}
const a = 1;
export {
    a,
    Dialog as default 
}
// export default Dialog