import React from 'react'
import Description from '../Components/Description'
import Design from '../Components/Design'
import NavBar from '../Components/navbar/Navbar'
import Pitch from '../Components/Pitch'
import Portfolio from '../Components/Portfolio'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Pitch />
        <Design />
        <Description />
        <Skills />
        <Portfolio />
        <Footer />
    </div>
  )
}

export default Home