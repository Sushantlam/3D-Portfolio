import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Experience from './Components/Experience'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
    <Navbar />
    
    <section id="home">
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="work">
      <Projects />

    </section>
    <section id="experience">
      <Experience />
    </section>

    <section id="contact">
      <Contact />
    </section>
  </main>
    
  )
}

export default App