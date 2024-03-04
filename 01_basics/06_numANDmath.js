/*

const num=400
console.log(num)

const num2 = new Number(100)// this will create a new object number used to give more method to numbers
console.log(num2)

console.log(num2.toFixed(2))// now it will show output 100.00 mostly used in building ecommerce site 

let demo=12.32825
console.log(demo.toPrecision(4));

let demo2=10000
console.log(demo2.toLocaleString('en-IN'))// it will add commas in number according to ('en-IN') in this i used india
*/



//************************************Maths*****************************/
/*
console.log(Math)//this is built in object which provieds properties and methods 
console.log(Math.abs(-4))// it will convert negitive value into positive 
console.log(Math.round(2.6))// it will roundoff the value output will be "3"
console.log(Math.ceil(4.15))// is a method in JavaScript that returns the smallest integer greater than or equal to a given number
console.log(Math.floor(5.7))// remove number after "."
console.log(Math.min(1,2,3,4,5,6))// gives minimum value/lowest value
console.log(Math.max(4,5,6,83,5,7))// gives maximum value/highest value
*/
/*
console.log(Math.random())// it will give you random number btw 0 to 1
console.log(Math.random()*6)// now in this it will give me value under 6 
console.log((Math.random()*3)+1)//now in this value will be not 0 bcz of +1 and maximun value will 3
*/
let max = 10
let min = 5

let result=(Math.floor(Math.random()*(max-min+1)+min));//we wraped in floor to give result in single digit

console.log(result);

