import React from "react";
import BrandTabs from "../common/BrandTabs.jsx";

const millBrandImages = [
  { src: "/products/rice/rice-mill-1.jpg", label: "Rice Mill Brand 1" },
  { src: "/products/dal/dal-mill-1.jpg", label: "Dal Mill Brand 1" },
  { src: "/products/flour/flour-mill-1.jpg", label: "Flour Mill Brand 1" },
];

const generalBrandImages = [
  { src: "/products/rice/rice-general-1.jpg", label: "Rice General Brand 1" },
  { src: "/products/dal/dal-general-1.jpg", label: "Dal General Brand 1" },
  {
    src: "/products/flour/flour-general-1.jpg",
    label: "Flour General Brand 1",
  },
];

const Products = () => {
  return (
    <section id="products" className="section section-light">
      <div className="section-header">
        <h2>Products &amp; Sizes</h2>
        <p>
          BOPP laminated bags for rice, dal, flour, cem and general products
          with strong construction and attractive multicolour printing.
        </p>
      </div>

      <div className="product-grid">
        {/* Rice */}
        <div className="product-card">
          <h3>Rice Bags</h3>
          <p>Premium printed BOPP bags for rice mills and brands.</p>
          <div className="size-row">
            <span className="size-chip">5kg</span>
            <span className="size-chip">10kg</span>
            <span className="size-chip">25kg</span>
            <span className="size-chip">30kg</span>
            <span className="size-chip">50kg</span>
          </div>
        </div>

        {/* Dal */}
        <div className="product-card">
          <h3>Dal Bags</h3>
          <p>Durable bags for pulses and lentils with custom branding.</p>
          <div className="size-row">
            <span className="size-chip">5kg</span>
            <span className="size-chip">10kg</span>
            <span className="size-chip">25kg</span>
            <span className="size-chip">30kg</span>
            <span className="size-chip">50kg</span>
          </div>
        </div>

        {/* Flour */}
        <div className="product-card">
          <h3>Flour Bags</h3>
          <p>Attractive BOPP bags for atta, maida, and other flours.</p>
          <div className="size-row">
            <span className="size-chip">5kg</span>
            <span className="size-chip">10kg</span>
            <span className="size-chip">25kg</span>
            <span className="size-chip">30kg</span>
            <span className="size-chip">50kg</span>
          </div>
        </div>

        {/* Cem */}
        <div className="product-card">
          <h3>Cem Bags</h3>
          <p>Strong BOPP laminated bags for white cem.</p>
          <div className="size-row">
            <span className="size-chip">5kg</span>
            <span className="size-chip">10kg</span>
            <span className="size-chip">25kg</span>
            <span className="size-chip">30kg</span>
            <span className="size-chip">50kg</span>
          </div>
        </div>

        {/* General packaging */}
        <div className="product-card">
          <h3>General Packaging</h3>
          <p>Custom BOPP bags for multiple agri and food products.</p>
          <div className="size-row">
            <span className="size-chip">Custom size</span>
            <span className="size-chip">Custom print</span>
          </div>
        </div>
      </div>

      <div className="customization-box">
        <h3>Customization &amp; Order Types</h3>
        <ul>
          <li>Any brand name and artwork as per customer design.</li>
          <li>Up to 8 colours with high-quality printing.</li>
          <li>Thickness as per requirement.</li>
          <li>Gum lamination and metallic finish available.</li>
          <li>Any fabric brand, any colour (as per availability).</li>
          <li>Standard inks and proto/rotogravure fabric not supplied.</li>
        </ul>
        <p className="order-note">
          <strong>Mill Brand:</strong> Bulk orders only. Contact by call,
          WhatsApp, or enquiry form.
          <br />
          <strong>General Brand:</strong> No bulk requirement. Order any
          quantity by call, WhatsApp, or enquiry form.
        </p>
      </div>

      <BrandTabs
        millBrandImages={millBrandImages}
        generalBrandImages={generalBrandImages}
      />
    </section>
  );
};

export default Products;
