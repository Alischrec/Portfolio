import React from "react";
import './App.css';
import TopNav from './Components/navbar'
import Header from './Components/header'
import Intro from './Components/intro'
import Experience from './Components/experience'
import Technologies from './Components/technologies'
import Projects from './Components/projects'
import Collab from './Components/collab'
import Contact from './Components/contact'
import Footer from './Components/footer'

function App() {
  
  return (
    <div style={{ 
      backgroundImage: `url("/images/background.png")` 
    }}>
      
    < TopNav />
    < Header />
    < Intro />
    < Experience />
    < Technologies />
    < Projects />
    < Collab />
    < Contact />
    < Footer />
    </div>
  )
}

export default App;
