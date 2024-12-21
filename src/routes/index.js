import express from "express";
import CounterComponent from "../components/ssr/CounterComponent.js";
import AboutPage from "../components/ssr/AboutPage.js";
import { renderToHTMLPage } from "../utils/renderToHTML.js";

const router = express.Router();

router.get("/", (_, res) => {
  res.redirect("/counter?count=0");
});

router.get("/counter", (req, res) => {
  const count = parseInt(req.query.count || "0", 10);
  const counter = new CounterComponent({ count });

  const html = renderToHTMLPage(counter);
  res.send(html);
});

router.get("/about", (_, res) => {
  const aboutPage = new AboutPage();
  const html = renderToHTMLPage(aboutPage);
  res.send(html);
});

export default router;