import React from "react";

const About = () => {
  return (
    <section id="about" className="section section-light">
      <div className="section-header">
        <h2>About Vasavi Polypacks</h2>
        <p>
          Vasavi Polypacks manufactures BOPP laminated packaging bags for rice,
          dal, flour, and food grains, serving mills, traders, and wholesalers
          with bulk, customized packaging solutions.
        </p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <h3>Location</h3>
          <p>Janapadu, Near HP Petrol Bunk</p>
        </div>
        <div className="about-card">
          <h3>Order Type</h3>
          <p>Mill brand: bulk orders,  General brand: any quantity.</p>
          </div>
        <div className="about-card">
          <h3>Partners</h3>
         <p>
          Durgarao M, Nageswarao D, Mallicarjuna Rao G,
          Srinivasa Rao Ch
       </p>
      </div>

        <div className="about-card">
          <h3>GST</h3>
          <p>GST registered; details available on request.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
