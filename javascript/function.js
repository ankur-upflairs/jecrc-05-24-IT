//function is a block of code that performs a specific task and can be reused
//syntax
// function fun_name(){
//     //code
// }
//function declaration
function add(a,b){
    // console.log(a+b)
    return a+b
}
add(10,20)
console.log(add(30,40))
function cube(a){
    return a**3;
}
//function expression
let sumOfNaturalNumber=function(n){
    let sum=n*(n+1)/2
    return sum
}
console.log(sumOfNaturalNumber(5))
//arrow function
// let si=(p,t,r)=>{
//     return (p*t*r)/100
// }
// let si=(p,t,r)=>(p*t*r)/100
let square=a=>a**2
console.log(square(36))

// callback function =>
// cb fn is a function that is passed as an argument to another function
// that is called inside the outer function
let multiplyBy5AndAdd=(n,fn)=>{
    let s=n*5
    return fn(s)
}
let add10=function(a){return a+10}
console.log(multiplyBy5AndAdd(10,add10))
console.log(multiplyBy5AndAdd(5,x=>x+20))

