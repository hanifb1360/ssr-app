import React from "react";
import { Link } from "react-router-dom";

const HybridLink = ({ to, children, ssr = false, ...props }) => {
  if (ssr) {
    // Use <Link> for smooth navigation
    return <Link to={to} {...props}>{children}</Link>;
  }

  // Default CSR navigation
  return <Link to={to} {...props}>{children}</Link>;
};

export default HybridLink;