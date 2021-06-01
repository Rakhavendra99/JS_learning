function wait(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve('Success');
        }, 2000);
    });
}
async function call(){
    console.log('Calling');
    const result = await wait();
    console.log(result);
}
call();