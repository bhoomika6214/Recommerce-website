import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import './App.css'
import About from './components/About'
import MissionVisionApproach from './components/Missionvisionapproach'
import OurServices from './components/Ourservices'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero2 />
      <About />
      <MissionVisionApproach />
      <OurServices />
    </div>
  )
}

export default App
