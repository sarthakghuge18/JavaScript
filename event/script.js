
let btn1 = document.querySelector("#btn1");
let box = document.querySelector("div");
let mode = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body");

// btn1.onclick = () =>{
//     console.log("btn was clicked");
// }

// addEventListener

btn1.addEventListener("click",() =>{
    console.log("btn was clicked");
})

const handler = () =>{
    console.log("btn was clicked 2");
}

btn1.addEventListener("click",handler);

box.onmouseover = ( ) => {
    console.log("you are inside the box")
}

btn1.removeEventListener("click",handler);

mode.addEventListener("click",() => {
    if(currmode == "light"){
        currmode = "dark";
        body.style.background="black";
    }else{
        currmode = "light";
        body.style.background="white";
    }

    console.log(currmode);
})