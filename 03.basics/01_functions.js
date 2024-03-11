//function
//function allow us to reuse the code as much as time we want


// function addtwonumber(num1,num2){//this a parameter
//     console.log(num1+num2)

// }
// addtwonumber(5,5)//this is a argument




//return
 function addtwonum(num1,num2){
    const result=num1+num2
    return result//after return in code nothing runs after return it will get ignored
 }
//  console.log(addtwonum(5,5))


 function userlogged(username){
    if (username===undefined){
        console.log("plz enter username")
    }else{
    return `${username} just loggedin`}
 }
//  console.log(userlogged("smit"));


 //function and object

//  function calculate(...num){//this is know as rest operator(which is also called as spread but under fnc its called as a rest)
//     return num
//  }
//  console.log(calculate(2,3,5));//give output in array


// const userinfo={
//     name:"rex",
//     price:555
// }

// function handleobject(userinfo){
//     console.log(`username is ${userinfo.name} and price is ${userinfo.price}`)
// }
// handleobject(userinfo)

//alternate way

function handleobject(userinfo){
    console.log(`username is ${userinfo.name} and price is ${userinfo.price}`)
}
handleobject(userinfo={
    name:"smit",
    price:"444"
})



//array passing 
const array=[1,2,4,5,]

function arraypass(myarray){
   return myarray[3]
}
 console.log( arraypass(array));
