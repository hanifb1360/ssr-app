import { BaseComponent } from "ssr-library";
import Button from "./Button.js";

class HomePage extends BaseComponent {
  render() {
    const button = new Button({ text: "Learn More", class: "btn-primary" });
    return `
      <section>
        <h2>Home Page</h2>
        <p>Welcome to our website! Explore our content below.</p>
        ${button.render()}
      </section>
    `;
  }
}

export default HomePage;