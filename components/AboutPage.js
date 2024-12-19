import { BaseComponent } from "ssr-library";
import Header from "./Header.js";
import Footer from "./Footer.js";

class AboutPage extends BaseComponent {
  render() {
    // Create reusable header and footer
    const header = new Header({ title: "About Us" });
    const footer = new Footer();

    // Main about content
    return `
      ${header.render()}
      <section>
        <h2>About Our Project</h2>
        <p>
          Welcome to our server-side rendering (SSR) website powered by
          <strong>ssr-library</strong>. This site showcases dynamic content, reusable components,
          and SSR optimizations.
        </p>
        <p>
          The goal is to demonstrate a lightweight and efficient approach to rendering server-side
          components with caching, templating, and virtual DOM optimizations.
        </p>
      </section>
      ${footer.render()}
    `;
  }
}

export default AboutPage;