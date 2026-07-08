import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import './App.css'
import About from './components/About'
import MissionVisionApproach from './components/Missionvisionapproach'
import OurServices from './components/Ourservices'
import UpcomingEvents from './components/Upcomingevents'
import WhyChooseRecommerce from './components/WhyChooseRecommerce'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero2 />
      <About />
      <MissionVisionApproach />
      <OurServices />
      <UpcomingEvents />
      <WhyChooseRecommerce />
    </div>
  )
}

export default App
