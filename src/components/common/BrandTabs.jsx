import React, { useState } from "react";

// Make sure these files exist under public/products/general/
const generalBrands = [
  { name: "Select a brand", image: "" },
  { name: "Gokul", image: "/products/general/gokul.jpg" },
  { name: "Delhi Darbar", image: "/products/general/delhi-darbar.jpg" },
  { name: "Bell", image: "/products/general/bell.jpg" },
  { name: "Shimla Apple", image: "/products/general/shimla-apple.jpg" },
  { name: "Anarkali", image: "/products/general/anarkali.jpg" },
  { name: "Nawab", image: "/products/general/nawab.jpg" },
  { name: "Annapurna Gold", image: "/products/general/annapurna.jpg" },
  { name: "Lion", image: "/products/general/lion.jpg" },
  { name: "Kurnool Special", image: "/products/general/kurnool.jpg" },
  { name: "Kisan", image: "/products/general/kisan.jpg" },
  { name: "Jaguar", image: "/products/general/jaguar.jpg" },
  { name: "Lakshmi", image: "/products/general/lakshmi.jpg" },
  { name: "Bullet", image: "/products/general/bullet.jpg" },
  { name: "Royal Bullet", image: "/products/general/royal bullet.jpg" },
  { name: "5 Star", image: "/products/general/5 star.jpg" },
  { name: "Tajmahal Gold", image: "/products/general/tajmahal gold.jpg" },
  { name: "Tomato Gold", image: "/products/general/tomato gold.jpg" },
  { name: "JSR Rice", image: "/products/general/jsr rice.jpg" },
  { name: "HMT Rice", image: "/products/general/hmt.jpg" },
  { name: "Classic Gold", image: "/products/general/classic gold.jpg" },
  { name: "Golden Eagle", image: "/products/general/golden eagle.jpg" },
  { name: "Veer Shivaji", image: "/products/general/veer shivaji.jpg" },
  { name: "Gajraj Evergreen", image: "/products/general/gajraj.jpg" },
  { name: "Aahar HMT Rice", image: "/products/general/aahar.jpg" },
  { name: "Cow", image: "/products/general/cow.jpg" },
  { name: "Mezbaan", image: "/products/general/mezbaan.jpg" },
  { name: "Lal Badshah", image: "/products/general/lalbadshah.jpg" },
  { name: "Raja Gajendra", image: "/products/general/raja gajendra.jpg" },
  { name: "Dawat Special", image: "/products/general/daawat.jpg" },
  { name: "Golden Cycle", image: "/products/general/golden cycle brand.jpg" },
  { name: "Kissan Tractor", image: "/products/general/kissan tractor.jpg" }
];

const BrandTabs = () => {
  // GENERAL is default active
  const [active, setActive] = useState("general");
  const [selectedBrand, setSelectedBrand] = useState(generalBrands[0]);

  const handleBrandChange = (e) => {
    const brand = generalBrands.find((b) => b.name === e.target.value);
    setSelectedBrand(brand || generalBrands[0]);
  };

  return (
    <div className="brand-tabs">
      {/* Tabs */}
      <div className="brand-tab-buttons">
        <button
          className={active === "general" ? "active" : ""}
          onClick={() => setActive("general")}
        >
          General Brand
        </button>
        <button
          className={active === "mill" ? "active" : ""}
          onClick={() => setActive("mill")}
        >
          Mill Brand
        </button>
      </div>

      {/* Mill Brand content */}
      {active === "mill" && (
        <div className="mill-brand-premium">
          <div className="mill-text">
            <h3>Mill Brand Custom BOPP Bags</h3>
            <p>
              Exclusive custom-printed BOPP laminated bags with your own mill or
              brand name for rice, dal, flour and cem.
            </p>
            <ul>
              <li>Bulk orders only.</li>
              <li>Available sizes: 5kg, 10kg, 25kg, 30kg, 50kg.</li>
              <li>Up to 8 colours, gum lamination & metallic finish.</li>
              <li>Design support: share your logo or existing artwork.</li>
            </ul>
            <p className="order-note">
              For mill brand enquiries, please call or WhatsApp{" "}
              <strong>+91 8247674904</strong> or submit the enquiry form.
            </p>
          </div>
          <div className="mill-visual">
            <div className="mill-badge">Bulk Orders</div>
            <div className="mill-bag-mock">
              <span>Premium Mill Brand Bags</span>
            </div>
          </div>
        </div>
      )}

      {/* General Brand content */}
      {active === "general" && (
        <div className="general-brand-premium">
          <div className="general-left">
            <h3>General Brand BOPP Bags</h3>
            <p>
              Ready general brand bags for rice, dal, flour and cement. No bulk
              requirement – you can order any quantity by call, WhatsApp, or
              form.
            </p>
            <div className="general-brand-select">
              <label>Select General Brand</label>
              <select
                onChange={handleBrandChange}
                value={selectedBrand.name}
              >
                {generalBrands.map((brand) => (
                  <option key={brand.name} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
              <p className="general-note">
                Customization available for colours, thickness and finishing as
                per your requirement.
              </p>
            </div>
          </div>

          <div className="general-right">
            {selectedBrand && selectedBrand.image ? (
              <div className="general-card">
                <div className="general-image-wrap">
                  <img
                    src={selectedBrand.image}
                    alt={selectedBrand.name}
                    className="general-image"
                    loading="lazy"
                  />
                </div>
                <div className="general-info">
                  <h4>{selectedBrand.name}</h4>
                  <button
                    className="btn btn-primary small"
                    onClick={() => {
                      window.open(
                        `https://wa.me/918247674904?text=Hello%20Vasavi%20Polypacks,%20I%20am%20interested%20in%20${encodeURIComponent(
                          selectedBrand.name
                        )}%20general%20brand%20bags.`,
                        "_blank"
                      );
                    }}
                  >
                    WhatsApp about this brand
                  </button>
                </div>
              </div>
            ) : (
              <div className="general-placeholder">
                <p>Select a brand to view sample bag design.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandTabs;
