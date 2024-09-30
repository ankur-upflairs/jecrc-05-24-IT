import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'
import Createblog from './pages/Createblog'
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li><Link to={''}>home</Link></li>
          <li><Link to={'blogs'}>all blogs</Link></li>
          <li><Link to={'blogs/blog'}>single blog</Link></li>
          <li><Link to={'createblog'}>create blog</Link></li>
        </ul>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='blogs' element={<Blogs />} >
          </Route>
          <Route path='blogs/:id' element={<SingleBlog />} />
          <Route path='createblog' element={<Createblog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
