import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from './Components/About'
import Projects from './Components/Projects'
import TechStack from './Components/TechStack'
import Contact from './Components/Contact'
const App = () => {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <TechStack/>
     <Contact/>

     <SocialLinks/>
    </div>
  )
}

export default App
