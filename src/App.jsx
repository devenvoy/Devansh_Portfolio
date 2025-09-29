import React from 'react'
import About from './sections/About';
import Home from './sections/Home';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Blogs from './sections/Blogs';
import ExperienceSection from './sections/Experience';
import { Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="skills">   <Skills /></section>
            <section id="experience"><ExperienceSection /></section>
            <section id="projects"><Projects /></section>

            {/* <section id="blogs"><Blogs /></section> */}
            <section id="contact"><Contact /></section>
          </>
        } />
        <Route path='/achievements' element={<Achievements/>} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App;