import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import './App.css'
import About from './components/About'
import Service from './components/Service'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero2 />
      <About />
      <Service />
    </div>
  )
}

export default App
