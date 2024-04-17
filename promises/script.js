
//resolve in promises
let promise = new Promise((resolve,reject) => {
    console.log("i am promise");
    resolve("success");
})


//reject in promises
let promise1 = new Promise((resolve,reject) => {
    console.log("i am promise1");
    reject("error occur");
})


//promises using timeout 
let promise2 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("i am promise2");
    resolve("success");
   },5000);
})


//it is for resolve promises
promise2.then((res)=>{
    console.log("fulfilled",res);
})


//it is for reject promises
promise1.catch((err)=>{
    console.log("rejected",err);
})