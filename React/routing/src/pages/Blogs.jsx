import React from 'react'
import { Outlet } from 'react-router'
import { blogData } from '../blogData'
import BlogPost from '../components/BlogPost'

function Blogs() {
  return (
    <div>
      <h1>this is all blog page</h1>
      {blogData.map((blog) => 
       { return <BlogPost key={blog.title} {...blog}/>}
      )}
    </div>
  )
}
export default Blogs
