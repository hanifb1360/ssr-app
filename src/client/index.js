import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "../components/csr/Counter.js";
import HybridLink from "../components/csr/HybridLink.js"; // Import HybridLink component

// Placeholder for SSR content
const SSRPlaceholder = () => <div>Loading SSR Content...</div>;

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        {/* Navigation using HybridLink */}
        <HybridLink to="/about" ssr={true}>About (SSR)</HybridLink> |{" "}
        <HybridLink to="/csr-counter">Counter (CSR)</HybridLink>
      </nav>
      <Routes>
        {/* Define CSR routes */}
        <Route path="/csr-counter" element={<Counter initialCount={0} />} />
        {/* Placeholder for SSR routes */}
        <Route path="/about" element={<SSRPlaceholder />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
hydrateRoot(rootElement, <App />);