import React from 'react'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Offers from '../components/Offers/Offers'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import NewCollections from '../components/NewCollections/NewCollections'
function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Offers />
            <NewCollections />
            <NewsLetter/>
        </div>
    )
}

export default Home
