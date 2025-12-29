import React from "react";

const WhyUs = () => {
  return (
    <section id="why-us" className="section section-light">
      <div className="section-header">
        <h2>Why Choose Us</h2>
        <p>
          We combine strong materials, attractive printing, and reliable
          production to support your mill or brand with consistent packaging.
        </p>
      </div>

      <div className="why-grid">
        <div className="why-card">
          <h3>High Quality</h3>
          <p>Drop testing and strict quality checks before dispatch.</p>
        </div>
        <div className="why-card">
          <h3>Large Capacity</h3>
          <p>Daily production capacity up to 80,000 bags.</p>
        </div>
        <div className="why-card">
          <h3>Custom Design</h3>
          <p>Brand name, colours, and artwork fully customizable.</p>
        </div>
        <div className="why-card">
          <h3>Reliable Dispatch</h3>
          <p>Dispatch 10–15 days after order confirmation.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
