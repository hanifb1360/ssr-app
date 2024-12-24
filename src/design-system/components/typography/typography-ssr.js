import { BaseComponent } from "ssr-library";
import { typography } from "../../theme/typography.js";
import { colors } from "../../theme/colors.js";

class TypographySSR extends BaseComponent {
  render() {
    const { variant = "p", text } = this.props;

    const styles = {
      h1: `font-size:${typography.fontSizes.large}; font-weight:${typography.fontWeights.bold}; color:${colors.text}; margin: 0 0 16px;`,
      h2: `font-size:${typography.fontSizes.medium}; font-weight:${typography.fontWeights.bold}; color:${colors.text}; margin: 0 0 12px;`,
      p: `font-size:${typography.fontSizes.small}; font-weight:${typography.fontWeights.normal}; color:${colors.text}; margin: 0 0 8px;`,
    };

    return `<${variant} style="${styles[variant]}">${text || ""}</${variant}>`;
  }
}

export default TypographySSR;