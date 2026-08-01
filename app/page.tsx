import "./page.css";

import Hero from "./components/Hero";
import About from "./components/About";
import BrandSlider from "./components/BrandSlider";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BrandSlider />
      <Services />
      <Testimonials />
      <WhyChoose />
      <Contact />
    </>
  );
}
