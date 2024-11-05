import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'


const UserSignup = () => {
    let navigate=useNavigate()
    const [formData, setformData] = useState({
        password: "",
        email: "",
        name: ""
    })

    const changeHandler = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }
    async function signup() {
        let res = await axios.post('http://localhost:3001/user/signup', formData)
        if (res.data.status == 'failed') {
            console.log(res.data)
        } else {
            navigate('/login')
        }
    }


    return (
        <div className="loginsignup">
            <div className="loginsignup-container">

                <div className="loginsignup-fields">
                    <input name='name' value={formData.name} onChange={changeHandler} type="text" placeholder='Enter your name...' />
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                </div>
                <button onClick={signup}  >Login</button>

            </div>
        </div>
    )
}

export default UserSignup