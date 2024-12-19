import { BaseComponent } from "ssr-library";
import Button from "./Button.js";

class CounterComponent extends BaseComponent {
  render() {
    const button = new Button({
      text: "Increment",
      class: "btn-primary",
      id: "increment-btn", // Add an ID for the button
    });

    return `
      <div>
        <h2>Dynamic Counter</h2>
        <p id="counter-value">Current count: ${this.props.count}</p>
        ${button.render()} <!-- Render the button -->
      </div>
    `;
  }
}

export default CounterComponent;