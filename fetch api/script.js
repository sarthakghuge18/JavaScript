
const URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#fact");
let btn = document.querySelector("#btn");


const getFact =async ()=>{
    console.log("geting data");
    let response = await fetch(URL);     //fetch method is used to fetch resource data
    console.log(response);
    let data = await response.json();
    factPara.innerHTML = data[0].text;
}


btn.addEventListener("click",()=>{
    getFact();
})


//AJAX   asynchronous js and xml
//JSON   is javascript object notation 

