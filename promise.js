const promise = new Promise((resolve, reject) => {
  let success = true;

  if(success){
    resolve("Operation is successful");
  }else{
    reject("Operation is failed");
  }
});
promise.then(result=>{
    console.log(result);
})  
.catch(error=>{
    console.log(error)
});
