import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'


const UserLogin = () => {
    let navigate=useNavigate()
    const [formData, setformData] = useState({
        password: "",
        email: "",
       
    })

    const changeHandler = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }
    async function login() {
        let res = await axios.post('http://localhost:3001/user/login', formData)
        console.log(res.data)
        if (res.data.status == 'failed') {
            console.log(res.data)
            localStorage.removeItem('userToken')
        } else {
            localStorage.setItem('userToken',res.data.token)
            navigate('/')
        }
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <div className="loginsignup-fields">                   
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                </div>
                <button onClick={login}  >Login</button>

            </div>
        </div>
    )
}

export default UserLogin