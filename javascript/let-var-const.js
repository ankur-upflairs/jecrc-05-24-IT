//var => can be updated (reassigned) and redeclared
var a;
var a;
a=10;
a=3
//function/global scope
function test(){
    let d=10;
}
// console.log(d)//function scope
//let => can be updated (reassigned) and not redeclared
let b;
// let b;
b=10;
b=3
//block scope
if(true){
    let e=10;
    console.log(e)
}
console.log(e)

//const => cannot be updated and redeclared
const c=10;
// const c=3
//block scope