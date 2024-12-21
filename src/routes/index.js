import path from "path";
import express from "express";
import CounterComponent from "../components/ssr/CounterComponent.js";
import AboutPage from "../components/ssr/AboutPage.js";
import { renderToHTMLPage } from "../utils/renderToHTML.js";

const router = express.Router();

// SSR route for the About page
router.get("/about", (_, res) => {
  const aboutPage = new AboutPage();
  const html = renderToHTMLPage(aboutPage);
  res.send(html);
});

// SSR route for the Counter page
router.get("/counter", (req, res) => {
  const count = parseInt(req.query.count || "0", 10);
  const counter = new CounterComponent({ count });
  const html = renderToHTMLPage(counter);
  res.send(html);
});

// Default route to handle CSR pages
router.get("*", (req, res) => {
  res.sendFile(path.resolve("dist", "index.html"));
});

export default router;