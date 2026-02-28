import Home from '@/sections/Home';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import ExperienceSection from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

export const metadata = {
  title: 'Devansh Amdavadwala - Portfolio',
  description: 'Welcome to my portfolio',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return (
    <>
      <section id="home" style={{ position: 'relative', zIndex: 0 }}><Home /></section>
      <div style={{ position: 'relative', zIndex: 10, background: 'var(--background)', marginTop: '100vh' }}>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><ExperienceSection /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
}