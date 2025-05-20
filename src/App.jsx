import React from 'react'
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import Contact from './components/Contact';
import Footer from './pages/Footer';
import BackToTopButton from './components/BackToTopButton';
import Blogs from './pages/Blogs';
import ExperienceSection from './pages/Experience';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="experience"><ExperienceSection /></section>
            <section id="projects"><Projects /></section>
            {/* <section id="blogs"><Blogs /></section> */}
            <section id="contact"><Contact /></section>
          </>
        } />
        <Route path='/achievements' element={<Projects />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App;