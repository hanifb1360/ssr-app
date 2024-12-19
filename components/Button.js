import { BaseComponent, propsToAttributes } from "ssr-library";

class Button extends BaseComponent {
  render() {
    const attributes = propsToAttributes(this.props);
    return `<button ${attributes}>${this.props.text || "Click Me"}</button>`;
  }
}

export default Button;