import React from 'react'
import Navbar, { Heading } from './Navbar'
import Content from './Content'
import Footer from './Footer'

function Layout() {
    return (
        <>
            <div id="page">
                <header id="header">
                <Navbar/>
                </header>
                <Heading/>
                <Content/>
                 <Footer/>
            </div>
            
        </>
    )
}

export default Layout
