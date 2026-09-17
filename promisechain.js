function step1(){
    return Promise.resolve(10);
}
step1().then((result)=>{
    console.log('step 1',result);
    return result+10;
}).then((result)=>{
    console.log('step 2',result);
    return result+10;
}).then((result)=>{
    console.log('step 3',result);
    return result+10;
}).catch((error)=>{
    console.log('error',error);
});
