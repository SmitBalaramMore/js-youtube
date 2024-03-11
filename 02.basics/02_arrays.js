const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)//this will add the 2nd array in another you can add any data
//types in array

//console.log(marvel_heros[3][2])//so it is getting array in array's value


//now we will concat the array in single array not in nested array using concat
//it's need new variable to hold new concat array
 //const array1=marvel_heros.concat(dc_heros)
// console.log(array1)

//const all_heros=[...marvel_heros,...dc_heros];//this a spread operator here we are using bcz we can add many arrays in one 
//console.log(typeof all_heros);

//const everyhero=[1,2,3,4,[1,3,4,4,6,[4,5,6,6]]]
//const allhero=everyhero.flat(4);//this will add array inside array in one and you have give lenth of array you want in one
//console.log(allhero);

console.log(Array.isArray([1,2,3,4]))//check the value if it is array
console.log(Array.from("smitmore"))//converts into array



let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

