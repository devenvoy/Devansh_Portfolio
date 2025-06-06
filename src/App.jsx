import React from 'react'
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import BackToTopButton from './components/BackToTopButton';
import Blogs from './pages/Blogs';
import ExperienceSection from './pages/Experience';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';

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
      <ToastContainer />
    </div>
  )
}

export default App;