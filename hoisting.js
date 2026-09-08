// console.log(name);
// let name = "Swarnim"; 
//this will give reference error because of let

//temporal dead zone
//(the period between entering a scope and initialize let and const variables is called temporal dead zone.)
// let z=10;
// console.log(z);

//closures
// //(jo inner function hoga vo inner function ko yaad rakhega even after the outer function has finished. This is called closure.)
// function outer() {
//     let counter = 0;
//     function inner() {
//         //inner() remembers counter
//         counter++;
//         console.log("counter",counter);
//     }
//     return inner;
// }
// let increment = outer();
// increment();

//higher order function
//(functions that take other functions as arguments or return functions as their result are called higher order functions.)

// function calculate(a,b, operation) {
//     return operation(a,b);
// }
// function add(a,b) {
//     return a+b;
// }
// function multiply(a,b) {
//     return a*b;
// }
// console.log(calculate(5, 3, add)); 
// console.log(calculate(5, 3, multiply));

//.map

// //(without map)
// let numbers = [1, 2, 3, 4, 5];
// let square = [];

// for (let i = 0; i < numbers.length; i++) {
//     square.push(numbers[i] * numbers[i]);
// }

// console.log(square);

// // with map
// let numbers = [1, 2, 3, 4, 5];
// let square = numbers.map(function(num) {
//     return num * num;
// });
// console.log(square);

// //with arrow function
// let numbers = [1, 2, 3, 4, 5];
// let square = numbers.map(num => num * num);
// console.log(square);

// //using filter
// let numbers = [1, 2, 3, 4, 5];
// let even = numbers.filter(num => { return num%2 === 0; });
// console.log(even);


//.reduce
//(combining all the elements of an array into a single value by applying a function to each element and accumulating the result.)

// let numbers = [1, 2, 3, 4, 5];
// let total = numbers.reduce((sum,number) => {
//     return sum + number;
// }, 0);
// console.log(total);

let numbers = [10, 20, 30, 40, 50, 60];
let maximum = numbers.reduce((max, number)=>{
    if(number>max){
        return number;
    }else{
        return max;
    }

}, 0);
console.log(maximum);
