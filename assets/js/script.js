"use strict";



// console.log(count)


// let surname = "Ismayilov";


// if(true){

// }

// function showText(){
//     console.log("salamlar")
// }


// showText();

// function countOfNums() {
//     let nums = [1, 5, 3, 6, 8, 9];

//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i] % 2 == 1) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countOfNums())



// function sum(a, b) {

//     return a + b;
// }


// let result = sum(4,10);

// console.log(result);





// function countOfNums(num1, num2) {
//     let count = 0;
//     for (let i = num1; i < num2; i++) {
//         if(i > 5){
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(countOfNums(1,20));


// function test(){
//     console.log(arguments)
// }

// test(1,2,5,6,7);



// function test(){
//     console.log(this)
// }

// test();


// let student = {
//     name: "Surac",
//     surname: "Ismayilov",
//     address: "Vasmoy",
//     getData: function () {
//         console.log(this.name)
//     }
// }

// student.name = "Test";

// student.getData();


// let student = {
//     name:"Surac",
//     age:23
// }

// console.log(student)

// student.name = "Ismayil";

// console.log(student)

// const stu2 = {
//     name:"test",
//     age:55
// }

// student = stu2;

// console.log(student.name)


// function test(a, b = 100){
//     console.log(a + b)
// }


// test(5)



// let test = (a, b) =>  a + b;
// let res = test(10, 20);

// console.log(res);
// function test(){
//     console.log(arguments)
// }

// test(12,3,4);


// let getAll = () =>{
//     console.log(arguments)
// }


// getAll(1,2,3);


// function test(){
//     console.log(this)
// }

// test();


// let getAll = () =>{
//     console.log(this)
// }


// getAll();

// let person = {
//     name:"Test",
//     surname:"XXX",
//     age : 35,
//     getFullData: function(){
//         console.log(this.name + " " + this.surname + " - " + this.age)
//     },
//     getFullName: () =>{
//         console.log(this.name + " " + this.surname + " - " + this.age)
//     }
// }

// person.getFullData();
// person.getFullName();


// Regular Function

// function calcOfSquareOdd(arr){

//     let sum =0;
//     for (let i = 0; i < arr.length; i++) {

//         if(arr[i]%2==0){
//             sum+=arr[i];
//         } 


//     }

//     let result= sum**2;
//     console.log(result)

// }
// calcOfSquareOdd([2,3,4,5,6]);

// Arrow Func

// let calcOfSquareOdd = (arr) => {
//     let sum = 0;
//     let result;

//     arr.forEach(num => {
//         if (num % 2 == 0) {
//             sum += num
//         }
//     });

//     result = sum ** 2;
//     return result
// }

// console.log(calcOfSquareOdd([2, 4, 5, 6, 7]));

