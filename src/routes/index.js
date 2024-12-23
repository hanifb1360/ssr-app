import path from "path";
import express from "express";
import AboutPage from "../components/ssr/AboutPage.js";
import { handleSSR } from "../utils/ssrHelpers.js";

const router = express.Router();

// Route for the About page
router.get("/about", (req, res) => {
  handleSSR(AboutPage, {}, res);
});

// Default route to handle CSR pages
router.get("*", (req, res) => {
  res.sendFile(path.resolve("dist", "index.html"));
});

export default router;