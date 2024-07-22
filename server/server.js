require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./config/connection");
const cors = require("cors");
const { getContent } = require("./controllers/contentController");
const eventRoutes = require("./routes/api/eventRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins = [
  "https://renderfile-6f797c2d85db.herokuapp.com",
  "http://www.renderfile.com",
  "https://www.renderfile.com",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin, like mobile apps or curl requests
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
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
