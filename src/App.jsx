import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      <Navbar />

      <Home />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>
  )
}

export default App