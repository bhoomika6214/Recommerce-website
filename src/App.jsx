import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero2 from './components/Hero2'
import './App.css'
import About from './components/About'
import MissionVisionApproach from './components/Missionvisionapproach'
import OurServices from './components/Ourservices'
import UpcomingEvents from './components/Upcomingevents'
import WhyChooseRecommerce from './components/WhyChooseRecommerce'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import CareersPage from './pages/CareersPage'
import GalleryPage from './pages/GalleryPage'

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <Hero2 />
      <About />
      <MissionVisionApproach />
      <OurServices />
      <UpcomingEvents />
      <WhyChooseRecommerce />
      <Testimonial />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  )
}

export default App
