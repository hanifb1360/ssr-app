import { BaseComponent } from "ssr-library";
import  TypographySSR  from "../../design-system/components/typography/typography-ssr.js";
import { dynamicImport } from "../../design-system/utils/dynamicImport.js";

let Button;

(async () => {
  Button = await dynamicImport(
    "../../design-system/components/button/button-csr.js",
    "../../design-system/components/button/button-ssr.js"
  );
})();

class AboutPage extends BaseComponent {
  render() {
    const heading = new TypographySSR({
      variant: "h2",
      text: "About Our Project",
    });

    const paragraph1 = new TypographySSR({
      variant: "p",
      text: "Welcome to our server-side rendering (SSR) website powered by ssr-library. This site showcases dynamic content, reusable components, and SSR optimizations.",
    });

    const paragraph2 = new TypographySSR({
      variant: "p",
      text: "The goal is to demonstrate a lightweight and efficient approach to rendering server-side components with caching, templating, and virtual DOM optimizations.",
    });

    const buttonInstance = Button
      ? new Button({
          type: "primary",
          text: "Learn More",
        })
      : { render: () => "<button>Loading...</button>" };

    return `
      <section>
        ${heading.render()}
        ${paragraph1.render()}
        ${paragraph2.render()}
        ${buttonInstance.render()}
      </section>
    `;
  }
}

export default AboutPage;