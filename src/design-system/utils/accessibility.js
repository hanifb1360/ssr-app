export const addAriaAttributes = (attributes) => {
    return Object.entries(attributes)
      .map(([key, value]) => `aria-${key}="${value}"`)
      .join(" ");
  };