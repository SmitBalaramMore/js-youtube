/* there are two types of data primitive and non-primitive

primitive data types are stored directly in memory when you work
with them you are manipulate the actual value
types:
1.stringe
2.number
3.bigint
4.boolean
5.null
6.symbol
7.undefined
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




