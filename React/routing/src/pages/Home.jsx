import React from 'react'
import { blogData } from '../blogData'
import BlogPost from '../components/BlogPost'

function Home() {
  let technology=blogData.filter((blog) => blog.category === 'Technology')
  return (
    <div>
      <h1>Technology</h1>
      <div>
      {technology.slice(0,2).map((blog,i,arr) => {
        console.log(blog)
        return <BlogPost key={i} {...blog}/>
      }
      )}
      </div>
    </div>
  )
}

export default Home
