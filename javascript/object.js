// object => collection of key value pairs
let student={
    name:"aman",
    rollno:34,
    marks:[34,45,56],
    isMinor:true,
    address:{
        city:"delhi",
        state:"delhi"
    },
    showName:function(){
        console.log(this.name)
    }
}

//dot notation =>
    console.log(student.name)
console.log(student.marks[1])
console.log(student.address.state)

student.showName()
//square notation =>
    console.log(student['name'])
