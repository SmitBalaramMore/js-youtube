/* there are two types of data primitive and non-primitive

primitive data types are stored directly in memory when you work
with them you are manipulate the actual value
types:
1.String: Used for representing textual data.
2.Number: Used for representing numeric values.
3.BigInt: Used for representing large integers.
4.Boolean: Used for representing true or false values.
5.Null: Used to represent the absence of a value.
6.Symbol: Used to create unique identifiers for object properties.
7.Undefined: Used to represent a variable that has been declared but not assigned a value
*/

const value=Symbol('1234')
const value2=Symbol('1234')

console.log(value==value2)


const bignum=123344566778n //(use 'n' to convert in bigint)
console.log(typeof bignum)



/*
non primitive (reference)
non primitive are stored in  memory as a reference whenever we work 
with them you are actually manipulate data's reference
types:
1.object
2.function
3.array
non primitive are more complex and can hold multiple values
*/

const array1=["smit","more","balaram"]
//console.log(array1)

array1[1]="rex"//(replaced more with rex)
//console.log(array1)

let obj1={
    name1:"smit",
    fathername :"balaram",
    surname:"more"
}
console.log(obj1)

let functionone = function(){
    console.log(1+1);
}
console.log(typeof functionone)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Stack (primitive)
//Heap(non-primitive)


/* 
STACK
primitive will store in stack memmory if you 
create a variable give value and now new variable u created and assigned your old variable
then it will create copy and give if u change in copy value it will not effect og variable value 
for example:  
*/
let variable1="rexmore"
let variable2=variable1
variable2="smit"

console.log(variable1)
console.log(variable2)

/*
HEAP
non-primitive will be stored in heap. if you created a object1 and that and created object2 and assigned object1
then you will give reference to object2 if object2 or object1 changed the value then it will show to both of them 
means you'are accessing the same value
for example:
*/
let userone={
    username:"blah@gmail.com",
    upi:"blah@ybl"
}

let usertwo=userone
usertwo.username="rex@gmail"//it will change in both of them 

console.log(userone);
console.log(usertwo);

















