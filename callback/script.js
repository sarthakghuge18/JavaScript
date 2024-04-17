const sum = ( a, b) =>{
    console.log(a+b);
}

const calcultor = (a,b,callback)=>{
    callback(a,b);
}


calcultor(1,2,sum);


const hello = () => {
    console.log("hello");
}

setTimeout(hello,2000);