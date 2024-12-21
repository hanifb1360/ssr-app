import React from "react";
import { Link, useLocation } from "react-router-dom";

const HybridLink = ({ to, children, ssr = false, ...props }) => {
  const location = useLocation();

  if (ssr) {
    // SSR route: Use <a> for full page reload
    return <a href={to} {...props}>{children}</a>;
  }

  // CSR route: Use React Router's Link for smooth navigation
  return <Link to={to} {...props}>{children}</Link>;
};

export default HybridLink;