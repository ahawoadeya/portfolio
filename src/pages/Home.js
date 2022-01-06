import React from 'react'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Qualifications from '../components/qualifications/Qualifications'
import Services from '../components/services/Services'
import Contact from '../components/contact/Contact'

const Home = () => {
    return (
        <main className="main">
          <Banner/>
          <About/>
          <Skills/>
          <Qualifications/>
          <Services/>
          <Contact/>
        </main>
    )
}

export default Home