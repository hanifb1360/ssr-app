import React from "react";
import { hydrateRoot } from "react-dom/client";
import Counter from "../components/csr/Counter.js";

const rootElement = document.getElementById("root");
const props = window.__INITIAL_PROPS__ || {};

// Hydrate the server-rendered content
hydrateRoot(rootElement, <Counter {...props} />);