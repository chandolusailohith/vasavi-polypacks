import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [brandType, setBrandType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "21e158d9-d2f8-465b-8f0d-ed780f7b33a1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setStatus("Please wait...");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (res.status === 200 && result.success) {
        setStatus("Enquiry sent. We will contact you shortly.");
        e.target.reset();
        setStateValue("");
        setBrandType("");
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Something went wrong. Please contact us on WhatsApp.");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (err) {
      setStatus("Network error. Please contact us on WhatsApp.");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Enquiry &amp; Contact</h2>
        <p>
          For mill brand bulk orders or general brand any-quantity orders, submit
          an enquiry or reach us directly by call or WhatsApp.
        </p>
      </div>

      <div className="contact-layout">
        {/* Left info card */}
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p>Vasavi Polypacks – manufacturer of BOPP laminated bags.</p>
          <p>Address: Janapadu, near HP Petrol Bunk.</p>
          <p>Phone / WhatsApp: +91 82476 74904</p>
          <p>Email: chandolusrinu9@gmail.com</p>

          <p className="form-note">
            For quicker coordination on designs, quantities and dispatch, you can
            also connect with us directly on WhatsApp.
          </p>

          <a
            href="https://wa.me/918247674904?text=Hi%2C%20I%20need%20enquiry%20on%20bags."
            className="btn btn-primary full-width"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp Now
          </a>
        </div>

        {/* Enquiry form with Web3Forms */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send an Enquiry</h3>

          {/* Company name – allow letters, numbers & basic symbols, but not empty / weird */}
          <div className="form-row">
            <label>Company name</label>
            <input
              name="company"
              type="text"
              placeholder="Your company / Industry name"
              required
              minLength={2}
              pattern="^[A-Za-z0-9 .,&()\-]+$"
              title="Please enter a valid company or Industry name"
            />
          </div>

          {/* Contact person – letters and spaces only */}
          <div className="form-row">
            <label>Contact person</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              minLength={2}
              pattern="^[A-Za-z ]+$"
              title="Please enter letters only for contact person"
            />
          </div>

          {/* Phone – 10 digits */}
          <div className="form-row">
            <label>Phone</label>
            <input
              name="phone"
              type="tel"
              placeholder="Your mobile number"
              required
              pattern="^[0-9]{10}$"
              title="Please enter a 10‑digit mobile number"
            />
          </div>

          {/* Bag type */}
          <div className="form-row">
            <label>Product / bag type</label>
            <select name="product" required>
              <option value="">Select bag type</option>
              <option value="Rice bags">Rice bags</option>
              <option value="Dal bags">Dal bags</option>
              <option value="Flour bags">Flour bags</option>
              <option value="Cem bags">Cem bags</option>
              <option value="Other">Custom bags</option>
            </select>
          </div>

          {/* Brand type */}
          <div className="form-row">
            <label>Brand type</label>
            <select
              name="brand_type"
              value={brandType}
              onChange={(e) => setBrandType(e.target.value)}
              required
            >
              <option value="">Select brand type</option>
              <option value="General brand">General brand</option>
              <option value="Own/Mill brand">Own / Mill brand</option>
            </select>
          </div>

          {/* Location fields */}
          <div className="form-row">
            <label>State</label>
            <select
              name="state"
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
              required
            >
              <option value="">Select state</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Other">Other state</option>
            </select>
          </div>

          {stateValue === "Other" && (
            <div className="form-row">
              <label>Enter state name</label>
              <input
                name="other_state"
                type="text"
                placeholder="Type your state"
                required
                minLength={3}
              />
            </div>
          )}

          <div className="form-row">
            <label>District</label>
            <input
              name="district"
              type="text"
              placeholder="District"
              required
              minLength={2}
            />
          </div>

          <div className="form-row">
            <label>Mandal</label>
            <input
              name="mandal"
              type="text"
              placeholder="Mandal"
              required
              minLength={2}
            />
          </div>

          {/* Pincode – 6 digits */}
          <div className="form-row">
            <label>Pincode</label>
            <input
              name="pincode"
              type="text"
              placeholder="Pincode"
              required
              pattern="^[0-9]{6}$"
              title="Please enter a 6‑digit pincode"
            />
          </div>

          {/* Quantity – numbers + commas allowed */}
          <div className="form-row">
            <label>Approximate quantity</label>
            <input
              name="quantity"
              type="text"
              placeholder="Example: 5,000 bags"
              pattern="^[0-9, ]*$"
              title="Please enter only numbers and commas for quantity"
            />
          </div>

          {/* Requirement details – required only for Own/Mill brand */}
          <div className="form-row">
            <label>Requirement details</label>
            <textarea
              name="message"
              rows="3"
              placeholder="Share bag size, brand name, microns, printing and any other details"
              required={brandType === "Own/Mill brand"}
              minLength={brandType === "Own/Mill brand" ? 5 : undefined}
            />
          </div>

          <button type="submit" className="btn btn-primary full-width">
            Submit enquiry
          </button>

          {status && (
            <div
              className={
                status.startsWith("Enquiry sent")
                  ? "alert alert-success"
                  : "alert alert-error"
              }
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
