import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./src/config/database";
import User from "./src/models/User";
import authRoutes from "./src/routes/auth";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Test Database Connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

// Sync Database Models
sequelize
  .sync()
  .then(() => console.log("Database synced..."))
  .catch((err) => console.log("Error: " + err));

// Routes
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
