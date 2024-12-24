import { BaseComponent, propsToAttributes } from "ssr-library";
import { buttonStyles } from "../../theme/colors.js"; 

class ButtonSSR extends BaseComponent {
  render() {
    const { type = "primary", text } = this.props;
    const styles = buttonStyles(type);

    // Convert styles to inline CSS
    const styleString = Object.entries(styles)
      .map(([key, value]) => `${key}:${value}`)
      .join(";");

    const attributes = propsToAttributes(this.props);

    return `<button class="btn btn-${type}" style="${styleString}" ${attributes}>${text || "Click Me"}</button>`;
  }
}

export default ButtonSSR;