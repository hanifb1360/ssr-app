import React from "react";
import HybridLink from "../HybridLink.js";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <HybridLink to="/about" ssr={true} className="navbar-link">
        About (SSR)
      </HybridLink>
      <span className="navbar-divider">|</span>
      <HybridLink to="/csr-counter" className="navbar-link">
        Counter (CSR)
      </HybridLink>
    </nav>
  );
};

export default Navbar;