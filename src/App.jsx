import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Values from './components/Values'
import Contact from './components/Contact'
import Footer from './components/Footer'
 
export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Values />
      <Contact />
      <Footer />
    </div>
  )
}