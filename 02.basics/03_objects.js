//how to declare symbols
const mysym=Symbol("smit")


console.log(mysym)

let obj={
    [mysym]:"smit",
    age:"21",
    gender:",male"
}
console.log(typeof mysym)


