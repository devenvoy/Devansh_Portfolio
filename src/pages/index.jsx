import Home from '@/sections/Home';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import ExperienceSection from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import SeoTags from '@/components/SeoTags';

export default function HomePage() {
  return (
    <>
      <SeoTags />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}