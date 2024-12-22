import path from "path";
import express from "express";
import AboutPage from "../components/ssr/AboutPage.js";
import { renderToHTMLPage } from "../utils/renderToHTML.js";

const router = express.Router();

// SSR route for the About page
router.get("/about", (_, res) => {
  const aboutPage = new AboutPage();
  const htmlContent = aboutPage.render(); // Only the inner HTML
  res.send(htmlContent);
});

// Default route to handle CSR pages
router.get("*", (req, res) => {
  res.sendFile(path.resolve("dist", "index.html"));
});

export default router;