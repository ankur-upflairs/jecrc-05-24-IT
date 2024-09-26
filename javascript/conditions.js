// if-else 
// if(condition){
//     //if-block
// }else{
//     //else-block
// }

// let age=18
// //show msg that u r a eligible voter or not
// if(age>=18){
//     console.log("u r a eligible voter")
// }else{
//     console.log("u r not a eligible voter")
// }
// //find the given no. is positive or negetive
// let n=20
// if(n>=0){console.log('positive')}
// else{console.log('negetive')}
const prompt=require('prompt-sync')()

// const num=prompt('enter a no.')
// console.log(num)
// const n=prompt('enter a no. : ')
// if(n%11==0){
//     console.log('divisible by 11')
// }
// else{
//     console.log('not divisible by 11')
// }
///nested if-else
// if(n>=0){
//     if(n>0){
//         console.log('no is positive')
//     }
//     else{
//         console.log('no is zero')
//     }
// }
// else{
//     console.log('no is negetive')
// }
// let n=prompt('enter a no. : ')

// console.log(typeof n)
// n=parseInt(n)
// console.log(typeof n)
// let n=parseInt(prompt('enter a no : '))

// if(n>0){
//        console.log('no is positive')
//     }
// else if(n==0){
//     console.log('no is zero')
// }
// else{
//     console.log('no is negetive')
// }
//ternary operator =>      shorthand of if-else 
//condition ? statement1 : statement2 
// let age=parseInt(prompt('enter your age : '))
// age >=18 ? console.log('adult') : console.log('minor')
let time=parseInt(prompt('enter current hours in 24 hour format'))
let shift= (time>=18 || time <=6 ? 'night' : 'day')
console.log(shift)

