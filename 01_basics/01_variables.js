
//always use let and const.
//var will create issue bcz of scopes 

const accountID= 12455
let accountEmail="smit@gmail.com"
var accountPassword="12134"




// it will show you undefined //
let accountAddress;

console.log(accountAddress);

//this will give u values in table //
console.table([accountAddress,accountEmail,accountID,accountPassword])