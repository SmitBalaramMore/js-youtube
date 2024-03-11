//singlton


const tinderuser= Object()//singleton object

tinderuser.id="one"
tinderuser.name="smit"
tinderuser.isloggedin=true


//console.log(tinderuser);


const newobj={  //we can store object inside object
    fullname:{
        username:{
            middlename:"rex",
            lastname:"more"
        }

    }
}
//console.log(newobj.fullname.username.middlename);//and this is how we can access them



ob1={1:"a",2:"b",3:"c"}
ob2={4:"a",5:"b",6:"c"}


//oball=Object.assign({},ob1,ob2);
const oball={...ob1,...ob2}
console.log(oball);