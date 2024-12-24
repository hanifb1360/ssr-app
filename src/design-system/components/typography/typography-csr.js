import React from "react";
import { typography } from "../../theme/typography.js"; // Import typography tokens
import { colors } from "../../theme/colors.js"; // Import color tokens

const TypographyCSR = ({ variant = "p", children, ...props }) => {
  const styles = {
    h1: {
      fontSize: typography.fontSizes.large,
      fontWeight: typography.fontWeights.bold,
      color: colors.text,
    },
    p: {
      fontSize: typography.fontSizes.medium,
      fontWeight: typography.fontWeights.normal,
      color: colors.text,
    },
  };

  const Tag = variant;

  return (
    <Tag style={styles[variant]} {...props}>
      {children}
    </Tag>
  );
};

export default TypographyCSR;