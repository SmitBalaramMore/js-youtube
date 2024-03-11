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
 console.log(addtwonum(5,5))


 function userlogged(username){
    if (username===undefined){
        console.log("plz enter username")
    }else{
    return `${username} just loggedin`}
 }
 console.log(userlogged("smit"));