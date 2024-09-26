// let a=[34,'er','hi',true]
//collection of datatypes 
//index=> 
//length=>total no. of elements
// console.log(a.length)
// console.log(a.concat([12,34,45]))//combining two or more array's
// console.log(a.push(34))//add element at last
// a.pop()//remove element at last
// a.shift()//remove element at first
// a.unshift(12)//add element at first
// console.log(a.indexOf('er'))
// console.log(a.lastIndexOf('hi'))
// console.log(a.includes('hi'))
// console.log(a.reverse())//reverse the array
// console.log(a)
let b=[34,56,2,3,78,9]
// for(let i in b){
//     console.log(i,b[i])
// }
// for(let i of b){
//     console.log(i)
// }
// console.log(b.slice(1,4))
// for(let i in b){
//     if(b[i]==78) console.log(i)
// }
// b.splice(1,0,90,34,23,10)
// console.log(b.sort((a,b)=>a-b))
// console.log(b)
// let c=b.find((value,index,array)=>{
//     return value> 56
// }) 
// // console.log(c)
// console.log(b.findIndex((value,index,array)=>{
//     return value > 50
// }) )
// b.forEach((value,index,array)=>{
//     console.log(value,index,array)
// })
// let newArray=b.map((v,i)=>{
//     return v*2
// })
// console.log(newArray)
let newArray=b.filter((v,i)=>{
    return v%2==0
})
console.log(newArray)