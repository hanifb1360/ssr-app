import { BaseComponent } from "ssr-library";

class Header extends BaseComponent {
  render() {
    return `<header><h1>${this.props.title || "Welcome!"}</h1></header>`;
  }
}

export default Header;