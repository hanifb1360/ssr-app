import { BaseComponent } from "ssr-library";

class Footer extends BaseComponent {
  render() {
    return `<footer>&copy; ${new Date().getFullYear()} My SSR Site</footer>`;
  }
}

export default Footer;