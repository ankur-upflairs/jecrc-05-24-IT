import React from 'react'
import { Navigate } from 'react-router'

function UserProtected({Comp}) {

    let token=localStorage.getItem('userToken')
    if(token){
        return <Comp/>
    }
    else{
        return <Navigate to={'/login'} />
    }
}

export default UserProtected
