import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero2 from './components/Hero2'
import './App.css'
import About from './components/AboutNetwork'
import MissionVisionApproach from './components/Missionvisionapproach'
import OurServices from './components/Ourservices'
import UpcomingEvents from './components/Upcomingevents'
import WhyChooseRecommerce from './components/WhyChooseRecommerce'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import CareersPage from './pages/CareersPage'
import AboutPage from './pages/AboutPage'
import AwarenessPage from './pages/AwarenessPage'
import Gallery from './components/Gallery'
import Services from './components/Services';
import PosterReport from './components/PosterReport';
import Pastevents from './components/Pastevents';
import Loader from './components/Loader';
import CursorMultifollow from './components/ui/motion-cursor-multifollow';

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <Hero2 />
      <About />
      {/*<MissionVisionApproach />*/}
      {/*<OurServices />*/}
      <Services />
      <UpcomingEvents />
      <PosterReport />
      <Pastevents />
      <Gallery />
      <WhyChooseRecommerce />
      <Testimonial />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Loader />
      <CursorMultifollow />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/awareness" element={<AwarenessPage />} />
        <Route path="/careers" element={<CareersPage />} />
        {/* the gallery is a section on the home page now; send old links there */}
        <Route path="/gallery" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
