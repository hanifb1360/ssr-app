import { BaseComponent } from "ssr-library";

class AboutPage extends BaseComponent {
  render() {
 
    // Main about content
    return `
     
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
     
    `;
  }
}

export default AboutPage;