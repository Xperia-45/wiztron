import { useReveal } from "./hooks/useReveal";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Domains } from "./components/Domains";
import { Events } from "./components/Events";
import { Achievements } from "./components/Achievements";
import { Team } from "./components/Team";
import { Gallery } from "./components/Gallery";
import { WhyJoin } from "./components/WhyJoin";
import { Testimonials } from "./components/Testimonials";
import { JoinUs } from "./components/JoinUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="min-h-screen bg-wiz-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Domains />
        <Events />
        <Achievements />
        <Team />
        <Gallery />
        <WhyJoin />
        <Testimonials />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
