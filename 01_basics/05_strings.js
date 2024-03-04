let name="smit"
let age="21"

console.log(`my name is ${name} and my age is ${age}`)


let gamename= new String("helloworldfrommore")
console.log(gamename);

console.log(gamename.split(''))
console.log(gamename[1])
console.log(gamename.length);
console.log(gamename.slice(5,8).toUpperCase());
console.log(gamename.replace("l","s"));
console.log(gamename.charAt(2));
console.log(gamename.indexOf("d"));




//const flashgame= gamename.substring(0,5)
//console.log(flashgame);

//slice can be used for negative indexing
 const anotherstringe = gamename.slice(5,-3)
 console.log(anotherstringe);