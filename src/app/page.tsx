import About from '@/components/About';
import Contact from '@/components/Contact';
import CursorLayer from '@/components/CursorLayer';
import Hero from '@/components/Hero';
import Languages from '@/components/Languages';
import Marquee from '@/components/Marquee';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';
import RevealController from '@/components/RevealController';
import ScrollProgress from '@/components/ScrollProgress';
import SiteFooter from '@/components/SiteFooter';
import Timeline from '@/components/Timeline';

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <CursorLayer />
      <Nav />

      <main>
        <div className="wrap" id="top">
          <Hero />
        </div>

        <Marquee />

        <div className="wrap">
          <Projects />
          <About />
          <Timeline />
          <Languages />
          <Contact />
        </div>
      </main>

      <SiteFooter />
      <RevealController />
    </>
  );
}
