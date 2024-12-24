export const colors = {
  primary: "#007bff",
  secondary: "#6c757d",
  background: "#ffffff",
  text: "#333333",
};

export const buttonStyles = (type = "primary") => ({
  backgroundColor: colors[type],
  color: type === "primary" ? "#fff" : "#000",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});