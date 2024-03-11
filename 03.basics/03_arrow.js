const user={
    username:"smit",
    price:888,


    welcomeMessage:function(){
        console.log(`${ this.username},welcome to website`)
    }//"this" is used to access variable under scope
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()


