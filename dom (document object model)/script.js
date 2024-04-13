

//selecting with id  -->
let heading = document.getElementById("heading");
console.log(heading);



//selecting with class -->
let heading2 = document.getElementsByClassName("heading2");
console.log(heading2);


//selecting with tag
let parah = document.getElementsByTagName("p");
console.log(parah);


//query selector -->
let element = document.querySelector("p");     //return 1st element occur
console.log(element);

let allelements = document.querySelectorAll("P"); //return  all element 
console.log(allelements);


/*

DOM manipulation -->
 
    properties -

    tagName : return tag for element nodes
    innerText : return the text content of the element and all its children
    innerHTML : return the plain text or HTML contents in the element 
    textContent : return texual content even for hidden elements
    
*/


/*
    Attributes -->

    getAttribute(attr) - to get attribute value
    setAttribute(attr,value) - to set attribute value
 */


let para = document.querySelector("p");
console.log(para.setAttribute("class","para"));
console.log(para.getAttribute("class"));


//style

let h1 = document.querySelector("#heading");
console.log(h1.style);
h1.style.backgroundColor = "red";
h1.style.fontSize = "50px";


/*
 
    Insert Element -->
     
    let el = document.creteElement("div");

    node.append(el) - add at the end of node (inside)
    node.prepend(el) - adds at the start of node (inside)
    node.before(el) - adds before the node (outside)
    node.after(el) - adds after the node (outside)
 */

    let newBtn = document.createElement("button");
    newBtn.innerText = "click me";

    let mainheading = document.querySelector("h1");
    mainheading.after(newBtn);