import React, { useState } from 'react'


function Forms() {
    const [user, setUser] = useState({
        fname: '', lname: '', contact: ''
    }) 
    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">first name
                    <input type="text" onChange={handleChange} value={user.fname}
                        name='fname' />
                </label><br />
                <label htmlFor="">last name
                    <input type="text" onChange={handleChange} value={user.lname} name='lname' />
                </label><br />
                <label htmlFor="">contact
                    <input type="text" onChange={handleChange} value={user.contact} name='contact' />
                </label><br />
                <input type="submit" />
            </form>


        </div>
    )
}




// function Forms() {
//     const [user,setUser]=useState({
//         fname:'',lname:'',contact:''
//     })
//     function handleChange(e) {
//         setUser({...user,fname:e.target.value})
//     }
//     return (
//         <div>
//             <label htmlFor="">first name
//                 <input type="text" onChange={handleChange} value={user.fname}
//                 name='fname' />
//             </label>
//             <label htmlFor="">last name
//                 <input type="text" onChange={(e)=>setUser({...user,lname:e.target.value})} value={user.lname} name='lname' />
//             </label>
//             <label htmlFor="">contact
//                 <input type="text" onChange={(e)=>setUser({...user,contact:e.target.value})} value={user.contact} name='contact' />
//             </label>

//         </div>
//     )
// }




// function Forms() {
//     const [fname, setFname] = useState('')
//     const [lname,setLname]=useState('')
//     const [contact,setContact]=useState('')
//     function handleChange(e) {
//         setFname(e.target.value)        
//     }
//     return (
//         <div>
//             <label htmlFor="">first name
//                 <input type="text" onChange={handleChange} value={fname} />
//             </label>
//             <label htmlFor="">last name
//                 <input type="text" onChange={(e)=>setLname(e.target.value)} value={lname} />
//             </label>
//             <label htmlFor="">contact
//                 <input type="text" onChange={(e)=>setContact(e.target.value)} value={contact} />
//             </label>

//         </div>
//     )
// }

export default Forms
