const person = false;
const p = new Promise((resolve,reject)=>{
    if(person){
        resolve("success");
    }else{
        reject("Failed");
    }
})
p.then((message)=>{
    console.log("Then "+message);
}).catch((message)=>{
    console.log("Catch "+message)
})