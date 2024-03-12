// const user={
//     username:"smit",
//     price:888,


//     welcomeMessage:function(){
//         console.log(`${ this.username},welcome to website`)
//     }//"this" is used to access variable under scope
// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//arrow function





// const chai= () =>{
//     let username='smit'
//     console.log(this);  
// }


//arrow fucntion syntax
//you can hold arrow fnc in variable also
//explicit return 
// const addtwo=(num1,num2) =>{
//     return num1+num2
// }
// console.log(addtwo(3,3))



//implicit return (u can use without "{}")
// const addtwo=(num1,num2) => num1+num2

//if you want to use return u need to use{}
//if you warraped in () u don't need to add return
//const addtwo=(num1,num2) => (num1+num2)
//console.log(addtwo(3,3))



//if you want to return object in arrow

const arr = ()=>({username:"smit"})
console.log(arr())


