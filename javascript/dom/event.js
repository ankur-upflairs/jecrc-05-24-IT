// let btn=document.getElementById('btn')

// btn.addEventListener('mouseover',()=>{
//     alert('you hovered on button')
// })
// function showMsg(){
//     alert('you clicked button')
// }
// btn.addEventListener('mouseenter',function(){
//     this.style.backgroundColor='green'
// })
//login->lougout

// let login=document.getElementById('login')
// let paragraph=document.getElementById('p')

// login.addEventListener('click',function(){
//     if(this.innerText=='login'){
//         this.innerText='logout'
//         paragraph.innerText='welcome user!!!'
//     }
//     else{
//         this.innerText='login'
//         paragraph.innerText='Please Login...'
//     }
// })
let show=document.getElementById('show')
let box=document.getElementById('box')

show.addEventListener('click',function(){
    if(this.innerText=='hide'){
        this.innerText='show'
        box.style.display='none'
    }
    else{
        this.innerText='hide'
        box.style.display='block'

    }
})
 


