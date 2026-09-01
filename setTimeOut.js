// console.log("Java");
// setTimeout(()=>{
//     console.log("After time out");
// };3000);
// console.log("Finished");
// let count=1;
// let timer=setInterval(()=>{
//     console.log(count);
//     count++;
//     if(count==6){
//         clearInterval(timer);
//     }
// },1000);

//exceptional handling
//try catch

// try{
//     let a=10;
//     console.log(a);
//     console.log(b);
// } catch(error){
//     console.log("An error occurred:", error.message);
// }

//custom error

function checkAge(age) {
    if (age < 18) {
        throw new Error("not eligible");
    }
    console.log("eligible");
}
try {
    checkAge(15);
} catch(error) {
    console.log("An error occurred:", error.message);
}