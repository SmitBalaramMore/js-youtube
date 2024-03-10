//1. array are zero-indexed the first element of index is 0
// 2.js array-copy operation create shallow copies
//shallow copy of an object is a copy whose properties share same reference
//3.deep copy of an object is a copy whose properties do not share th same reference


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

//console.log(myArr.includes(9)); if we want to find 9 is include in array it will ans in boolean value
// console.log(myArr.indexOf(3)); gives the index of value if value is not there it will give ans in minus

// const newArr = myArr.join() its join the array and convert it into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);