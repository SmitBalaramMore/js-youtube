const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)//this will add the 2nd array in another you can add any data
//types in array

//console.log(marvel_heros[3][2])//so it is getting array in array's value


//now we will concat the array in single array not in nested array using concat
//it's need new variable to hold new concat array
 const array1=marvel_heros.concat(dc_heros)
 console.log(array1)