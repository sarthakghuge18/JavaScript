
//function is block of code which is invoke by function call 

function welcome(){
    console.log("hello world");
    console.log("welcome to javascript");
}


function num(val){
    console.log(val);
}


function add(x,y){
    return x+y;
}


function sum(x,y){
    console.log(x+y);
}


//arrow function 
const arrowsum = (x,y) =>{
    console.log(x+y);
}


const arrowmul = (x,y) =>{
    console.log(x*y);
}



//calling the function -->

welcome();
num(10);
sum(10,20);
let s = add(10,20);
console.log(s);
arrowsum(1,2);
arrowmul(8,9);


//foreach in array 

let arr = [ 1,2,3,4,5];


arr.forEach((val)=>{
  console.log(val);  
});

let square = (val) =>{
    console.log(val*val);
}

arr.forEach((val) =>{
    console.log(val*val);
});

arr.forEach(square);


// map --> creates a new array with the result of some operation , the value its callback return are used to form new array

let newarr = arr.map((val) =>{
    return val**2;
});


//filter --> creates a new array of element that gives true for condition / filter 
//eg. all even elements in array

let newarr2 = arr.filter((val) => {
    return val % 2 == 0;
});


// reduce --> perform some operation & reduces the array to a single value . it returns that single value

let sum1 = arr.reduce((res,curr) =>{
    return res + curr;
});


