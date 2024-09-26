import React from 'react'
import { blogs } from './data'
import Blog from './Blog'



function Blogs() {
    return (
      <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
       {blogs.map((blog,index)=>{
         return <Blog key={index}  {...blog} />
       })}
      </div>
    )
  }



// function Blogs() {
//   return (
//     <div>
//       <Blog title={blogs[0].title} text={blogs[0].text} image={blogs[0].image} author={blogs[0].author} />
//       <Blog title={blogs[1].title} text={blogs[1].text} image={blogs[1].image} author={blogs[1].author} />
//       <Blog  {...blogs[2]} />

//     </div>
//   )
// }

export default Blogs
