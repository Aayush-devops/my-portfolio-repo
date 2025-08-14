import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import  ProjectsSection  from './components/ProjectsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ProjectDetail } from './pages/ProjectDetail'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Experience />
                  <About />
                  <Skills />
                  <Certifications />
                  <ProjectsSection />
                  <Contact />
                </>
              } />
               
              
              {/* Individual project pages */}
              <Route path="/projects/:slug" element={<ProjectDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}


export default App;