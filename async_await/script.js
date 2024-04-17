

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("whether data");
            resolve(200);
        },3000);
    })
    
}
//await pauses the execution of its surrounding async function until the promises is settled 

async function getWhether(){
    await api();  //1st
    await api();  //2nd
}