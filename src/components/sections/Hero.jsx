import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Colourful. Strong. Custom BOPP Bags.</h2>
        <p>
          Manufacturer of high-quality BOPP laminated rice, dal, flour and cem
          bags, with mill brand and general brand printing as per customer
          requirement.
        </p>

        <div className="hero-buttons">
          <a
             href="https://wa.me/918247674904?text=Hi%20Vasavi%20Polypacks%2C%20I%20need%20enquiry%20on%20bags."
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>

          <button
            type="button"
            className="btn btn-outline"
            onClick={scrollToContact}
          >
            Get a Quote
          </button>
        </div>

        <div className="hero-highlights">
          <span>80,000 bags / day</span>
          <span>5kg – 50kg sizes</span>
          <span>Mill brand: bulk • General brand: any qty</span>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-card">
          <h3>BOPP Laminated Bags</h3>
          <p>• Rice • Dal • Flour • Cem • General Packaging</p>
          <ul>
            <li>Up to 8 colours</li>
            <li>Gum lamination & metallic finish</li>
            <li>Custom brand & design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
