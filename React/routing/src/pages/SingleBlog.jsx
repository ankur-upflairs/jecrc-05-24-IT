import React from 'react'
import { useParams } from 'react-router'



function SingleBlog() {
    let {id}=useParams()
  return (
    <div>
      single blog details 
      {id}
    </div>
  )
}

export default SingleBlog
