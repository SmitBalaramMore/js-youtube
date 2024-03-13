//for of
//this is array specific loop

let list=[1,2,3,4,5,6]

for(const arr of list){
    //console.log(arr);   
}



let greetings="hey smitmore"

for(const greet of greetings ){
    if(greet==" "){
        continue
    }
   // console.log(greet);
}

//map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//it store unique value
//stores in key and value pair
 const map1= new Map
 map1.set('india','in')
 map1.set('america','usa')
 map1.set('china','ch')
 //console.log(map1);

 for(const [ala,value] of map1){
    console.log(ala,value);
 }

 

