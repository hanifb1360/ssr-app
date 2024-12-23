import React, { useState, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "../components/csr/Counter.js";
import HybridLink from "../components/csr/HybridLink.js";

const SSRContent = ({ url }) => {
  const [content, setContent] = useState("Loading SSR Content...");

  useEffect(() => {
    // Fetch the SSR content dynamically
    fetch(url)
      .then((res) => res.text())
      .then((html) => setContent(html))
      .catch((err) => setContent("Error loading content"));
  }, [url]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <HybridLink to="/about" ssr={true}>
          About (SSR)
        </HybridLink>{" "}
        | <HybridLink to="/csr-counter">Counter (CSR)</HybridLink>
      </nav>
      <Routes>
        {/* Define CSR routes */}
        <Route path="/csr-counter" element={<Counter initialCount={0} />} />
        {/* Dynamic SSR route */}
        <Route path="/about" element={<SSRContent url="/about" />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
hydrateRoot(rootElement, <App />);