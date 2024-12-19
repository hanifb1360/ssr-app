import express from "express";
import setupRoutes from "./routes/index.js";

const app = express();
const PORT = 3000;

// Setup routes
setupRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});