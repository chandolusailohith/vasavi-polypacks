import React from "react";

const About = () => {
  const handleOpenMaps = () => {
    window.open("https://maps.app.goo.gl/zzAMfhYbEwrK4WzZA", "_blank");
  };

  return (
    <section id="about" className="section section-light">
      <div className="section-header">
        <h2>About Vasavi Polypacks</h2>
        <p>
          Vasavi Polypacks manufactures BOPP laminated packaging bags for rice,
          dal, flour, cem and food grains, serving mills, traders, and wholesalers
          with bulk, customized packaging solutions.
        </p>
      </div>

      {/* Mill Process Video */}
      <div className="mill-video-section">
        <h3>Inside Our Manufacturing Unit</h3>
        <p>Watch the complete BOPP bag manufacturing process at our Industry.</p>
        <div className="mill-video-wrapper">
          <video
            src="/videos/mill-process.mp4" // put file at public/videos/mill-process.mp4
            muted
            loop
            controls
            playsInline
          />
        </div>
      </div>

      <div className="about-grid">
        {/* LOCATION CARD – whole card clickable */}
        <div className="about-card location-card" onClick={handleOpenMaps}>
          <h3>Location</h3>
          <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>Janapadu, 522413, Palnadu District, Near HP Petrol Bunk</span>
            <span
              style={{ color: "#e53935", fontSize: "20px", lineHeight: 1 }}
              aria-hidden="true"
            >
              📍
            </span>
          </p>
        </div>

        <div className="about-card">
          <h3>Order Type</h3>
          <p>Mill brand: bulk orders, General brand: any quantity.</p>
        </div>

        <div className="about-card">
          <h3>Partners</h3>
          <p>
            Durgarao M, Nageswarao D, Mallicarjuna Rao G, Srinivasa Rao Ch,
            Prasanna B
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
