require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./config/connection");
const cors = require("cors");
const { getContent } = require("./controllers/contentController");
const eventRoutes = require("./routes/api/eventRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        "https://renderfile-6f797c2d85db.herokuapp.com",
        "http://www.renderfile.com",
        "https://www.renderfile.com",
      ]
    : ["http://localhost:5173"]; // Development origin

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the origin
      } else {
        callback(new Error("Not allowed by CORS")); // Block the origin
      }
    },
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define REST API endpoints
app.get("/api/content", getContent);
app.use("/api", eventRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server listening on the port http://localhost:${PORT}`);
  });
});
