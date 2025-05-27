import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    })
  }, [])

  return (
    <div className={`min-h-screen transition-all duration-500 ease-in-out ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 text-gray-900'
    }`}>
      <CustomCursor />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative">
        <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          darkMode
            ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-purple-900/20 to-pink-900/30'
            : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-purple-100/20 to-pink-100/30'
        }`}>
          <div className={`absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] ${
            darkMode ? 'opacity-15' : 'opacity-5'
          }`}></div>
        </div>
        <div className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <footer className={`py-8 transition-all duration-500 ease-in-out ${
        darkMode 
          ? 'bg-gray-900/40 backdrop-blur-xl border-t border-gray-800/50' 
          : 'bg-gray-50/40 backdrop-blur-xl border-t border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-500 ease-in-out ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <p>© {new Date().getFullYear()} Aditya Rane. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
