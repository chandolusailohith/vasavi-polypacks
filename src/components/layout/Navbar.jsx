import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="nav">
      <div className="nav-left">
        <img
          src="/Vasavi-Kanyaka-Parameswari-Devi.gif"
          alt="Vasavi Polypacks Logo"
          className="logo"
        />
        <div className="nav-title">
          <h1>VASAVI POLYPACKS</h1>
          <span>Premium BOPP Laminated Bags</span>
        </div>
      </div>

      {/* desktop links */}
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#why-us">Why Us</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* mobile hamburger icon */}
      <button
        className="nav-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* mobile dropdown menu */}
      {isOpen && (
        <nav className="nav-mobile-menu">
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#products" onClick={closeMenu}>
            Products
          </a>
          <a href="#why-us" onClick={closeMenu}>
            Why Us
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
