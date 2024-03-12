//immmediately invoked function expression(IIFE)
//in iife we have wrap function inside () and call()
//to secure from global pollution (variables) to remove it we use iife


//this os named iife
(function chai(){
    console.log(`myname is smit`);

})();

//arrow in it(unamed iife)
((name)=>{
    console.log(`iam ${name}`)
})("smit")

