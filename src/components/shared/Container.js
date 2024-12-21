import { BaseComponent } from "ssr-library";

class Container extends BaseComponent {
  render() {
    const childrenHTML = this.children.map((child) => child.render()).join("");
    return `<div>${childrenHTML}</div>`;
  }
}

export default Container;