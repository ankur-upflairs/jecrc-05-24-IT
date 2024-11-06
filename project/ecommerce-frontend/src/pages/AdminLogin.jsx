import axios from 'axios'
import React, { useState } from 'react'


const AdminLogin = () => {

const [formData, setformData] = useState({
  password:"",
  email:""
})

const changeHandler = (e) => {
    setformData({...formData, [e.target.name]:e.target.value})
}
    async function login() {
        let res=await axios.post('http://localhost:3001/admin/login')
        console.log(res.data)
        if(res.data.status=='success'){
            localStorage.setItem('adminToken',res.data.token)
            window.location.replace('/')
        }
        else{
            localStorage.removeItem('adminToken')
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
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin