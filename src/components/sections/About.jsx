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

      {/* Mill Process Video */}
      <div className="mill-video-section">
        <h3>Inside Our Manufacturing Unit</h3>
        <p>Watch the complete BOPP bag manufacturing process at our mill.</p>
        <div className="mill-video-wrapper">
          <video
            src="/videos/mill-process.mp4"  // put file at public/videos/mill-process.mp4
    
            muted
            loop
            controls
            playsInline
          />
        </div>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Location</h3>
          <p>Janapadu, 522413, Near HP Petrol Bunk</p>
        </div>

        <div className="about-card">
          <h3>Order Type</h3>
          <p>Mill brand: bulk orders, General brand: any quantity.</p>
        </div>

        <div className="about-card">
          <h3>Partners</h3>
          <p>
            Durgarao M, Nageswarao D, Mallicarjuna Rao G,
            Srinivasa Rao Ch, Prasanna B
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
