import React from "react";
import "./button.css";
import { buttonStyles } from "../../theme/colors.js"; 

const ButtonCSR = ({ type = "primary", onClick, children, ...props }) => {
  const styles = buttonStyles(type);

  return (
    <button className={`btn btn-${type}`} style={styles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default ButtonCSR;