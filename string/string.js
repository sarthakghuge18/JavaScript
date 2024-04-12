//string is sequence of character 

let str = "hello world";
let str2 = " welcome";

console.log(str);
console.log(str2);


//calculate length with the help of length function 
let len = str.length;
console.log("length of string 1: ",len);


//indices in string 
console.log(str[0]);


//template literal
let specialString = `this is template literal`;
console.log(specialString);

let obj = {
    item : "pen",
    price : 20
}

console.log("the cost of ",obj.item ,"is",obj.price,"rupees");
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);


//string method 

console.log(str.toUpperCase);
console.log(str.toLowerCase());
str = "         sarthak         ";
console.log(str.trim());
str = "sarthak";
console.log(str.slice(2,5));
console.log(str.concat(str2));
console.log(str+str2);
console.log(str.replace("h","m"));
console.log(str.charAt(0));


