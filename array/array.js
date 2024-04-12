
//array is collection of item

let marks = [1,2,3,4,5,6];
console.log(marks);
console.log(marks.length);

let heros = ["ironman", "hulk","thor"];
console.log(heros);


//type of array is object

//indices

console.log("marks[0]",marks[0]);
console.log("marks[1]",marks[1]);



for(let val of marks){
    console.log(val);
}

for(let i = 0 ; i < marks.length ; i++){
    console.log(marks[i]);
}


//array method -->


//push()- add to end

console.log(marks);
marks.push(90);
console.log(marks);

//pop() - delete from end and return 

console.log(marks);
marks.pop();
console.log(marks);

//tostring()

console.log(marks.toString());

//unshift()-add at start

marks.unshift(9);
console.log(marks);


//shift()-delete from start

console.log(marks.shift());
console.log(marks);

//slice - return piece of array

console.log(marks.slice(2,5));

//splice

console.log(marks.splice(1,1,101));