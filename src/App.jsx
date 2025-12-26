import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Products from "./components/sections/Products.jsx";
import WhyUs from "./components/sections/WhyUs.jsx";
import Contact from "./components/sections/Contact.jsx";

const App = () => {
  useEffect(() => {
    // whenever app loads (including refresh), go to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-root">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
