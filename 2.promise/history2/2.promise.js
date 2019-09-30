let fs = require('fs');
let Promise1 = require('./promise')
function read(filename,encoding){
    return new Promise1((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },1000)
    })
}
let promise2= read('./name.txt','utf8').then((data)=>{
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           resolve(new Promise((resolve,reject)=>{
               setTimeout(() => {
                 resolve(123); 
               }, 1000);
           }))
       })
   })
},(err)=>{
    console.log(1,err);
})
promise2.then((data)=>{
    console.log('sucess',data);
},(err)=>{
    console.log('err',err)
});

// pwa
