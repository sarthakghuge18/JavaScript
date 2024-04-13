

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