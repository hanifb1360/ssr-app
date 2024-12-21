import express from "express";
import router from "../routes/index.js";

const app = express();
const PORT = 3000;

// Add middleware and routes
app.use(express.static("dist")); // Serve client-side bundles
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});