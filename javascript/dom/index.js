// let a=document.getElementById('a')
// console.log(a)
// let b=document.getElementsByClassName('x')
// console.log(b[1])//html collection
// let c=document.getElementsByTagName('p')
// console.log(c[1])
// let d=document.querySelector('.x')
// console.log(d)//return first matching element
// let e=document.querySelectorAll('.x')
// console.log(e[1])//node list

//text and html
let a=document.getElementById('a')
// console.log(a.innerText)
// console.log(a.innerHTML)
// a.innerText='my changed text <b>hello</b>'
// a.innerHTML='my changed text <b>hello</b>'
// let greet=document.getElementById('greet')
// let time=prompt('enter time in 24 hours format')   
// if(time>=6 && time<18){ 
//     greet.innerText='good morning'
// }else{
//     greet.innerText='good evening'
// }
//manuplating style 
// a.style.color='red'
// a.style.border='1px solid'
// a.style.fontSize='20px'
// a.style.backgroundColor='lightblue'
//remove hyphen from property name
//convert name into camelCase
//attributes
// console.log(a.getAttribute('id'))
// console.log(a.getAttribute('title'))
// a.setAttribute('class','y')
// a.removeAttribute('title')
// let x=confirm('do you want styling')

// if(x){
//     a.setAttribute('class','y')
// }else{
//     a.removeAttribute('class')
// }

console.log(a)
a.classList.add('y')
a.classList.remove('a')
a.classList.toggle('y')
a.classList.toggle('y')


