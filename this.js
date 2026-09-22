// const student={
//     name:"vikas",

//     showname(){
//         console.log(this.name);
//     }
// };
// console.log(student.name);
// student.showname();




// const student1={
//     name:"vikas",
// }
// const student2={
//     name:"Alice",
// }
// function introduce(city){
//     console.log(`my name is ${this.name} and i live in ${city}`);
// }
// introduce.call(student1,"delhi");




const student={
    name:"vikas",
    city:"delhi",
    age:24
};
function introduce(city,age){
    console.log(`name:${this.name}`);
    console.log(`city:${this.city}`);
    console.log(`age:${this.age}`);
}
introduce.call(student,"delhi",24);