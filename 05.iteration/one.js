//for

// for(let i=0;i<10;i++){
//     const num=i
//     if(num==5){
//     console.log("5 is best number")
//     }
//     console.log(num)
// }

//table
// for(let a=1;a<=10;a++){
//     console.log(a)
//     for(let b=1;b<=10;b++){
//         console.log(`${a}*${b}=${a*b}`);
//     }

// }


//array
let myarry=["ironman","hulk","superman"]
for(let index=0;index<myarry.length;index++){
    const save=myarry[index]
   // console.log(save);
}


//break it will close everything after that
// for(let i=1;i<10;i++){
    
//     if(i==5){
//         console.log("5 is fav number");
//         break
//     }
//     console.log(i)
// }

//continue
//this skip interation one time
for(let i=1;i<10;i++){
    
    if(i==5){
        console.log("5 is fav number");
        continue
    }
    console.log(i)
}
