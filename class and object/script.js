const employee = {
    calTax(){
        console.log("tax rate is 10%");
    }
}

const abc = {
    salary : 50000,

}

abc.__proto__ = employee;


//creating a Car class
class Car {

    constructor(brand){
        console.log("creating new object");
        this.brand = brand;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

}


//craeting object of class
let fortuner = new Car("fortuner");  //constructer invoke
let lexus = new Car("lexus");    //constructer invoke


// ***************** inheritance in js *************

class Person {
    
    constructor(){
        console.log("parent constructer");
    }

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{

    constructor(branch){
        super();
        this.branch = branch;
    }

    work(){
        console.log("solve problem , build something");
    }
}

let obj = new Engineer();