import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListProduct from './Components/ListProduct/ListProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddProduct from './components/AddProduct/AddProduct'
import ShopCategory from './pages/ShopCategory'
import kid_banner from "./Components/Assets/banner_kids.png";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import AdminLogin from './pages/AdminLogin'
import UserSignup from './pages/UserSignUP'
import UserLogin from './pages/UserLogin'
import Admin from './pages/Admin/Admin'
import Protected from './protectedRoutes/Protected'
import Cart from './pages/Cart'
import Product from './pages/Product'
import UserProtected from './protectedRoutes/UserProtected'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='mens' element={<ShopCategory category="men" banner={men_banner} />} />
          <Route path='womens' element={<ShopCategory category="women" banner={women_banner} />} />
          <Route path='kids' element={<ShopCategory category="kid" banner={kid_banner} />} />
          <Route path='adminLogin' element={<AdminLogin />} />
          <Route path='signup' element={<UserSignup />} />
          <Route path='login' element={<UserLogin />} />
          <Route path='admin' element={<Protected Comp={Admin}/>}>
            <Route path='create' element={<AddProduct />} />
            <Route path="listproduct" element={<ListProduct />} />
          </Route>
          <Route path='cart' element={<UserProtected Comp={Cart}/>}/>
        <Route path='product/:productId' element={<Product/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
