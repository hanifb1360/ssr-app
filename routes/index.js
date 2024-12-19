import { renderToHTML, diffDOM } from "ssr-library";
import Layout from "../views/Layout.js";
import AboutPage from "../components/AboutPage.js";
import CounterComponent from "../components/CounterComponent.js";

let previousHTML = ""; // Store previous HTML for diffing

export default (app) => {
  // Home route
app.get("/", (_, res) => {
  res.redirect("/counter?count=0");
});

  // Counter Page
  app.get("/counter", (req, res) => {
    const count = parseInt(req.query.count || "0", 10);

    // Use CounterComponent
    const counter = new CounterComponent({ count });
    const layout = new Layout({
      title: "Dynamic Counter",
      content: counter.render(),
    });

    // Render the new HTML
    const newHTML = renderToHTML(layout);

    // Compare with the previous HTML using diffDOM
    const diff = diffDOM(previousHTML, newHTML);
    previousHTML = newHTML; // Update previousHTML

    // Send optimized diff if changes exist, else send full HTML
    res.send(diff || newHTML);
  });

  // About Page
  app.get("/about", (req, res) => {
    const aboutPage = new AboutPage();
    const layout = new Layout({
      title: "About Us",
      content: aboutPage.render(),
    });

    const newHTML = renderToHTML(layout);
    res.send(newHTML);
  });
};