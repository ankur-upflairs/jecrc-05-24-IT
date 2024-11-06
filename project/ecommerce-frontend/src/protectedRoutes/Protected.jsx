import React from 'react'
import { Navigate } from 'react-router'

function Protected({Comp}) {

    let token=localStorage.getItem('adminToken')
    if(token){
        return <Comp/>
    }
    else{
        return <Navigate to={'/adminLogin'} />
    }
}

export default Protected
