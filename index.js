import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./mongodb/connect.js";
import UserRoutes from "./routes/UserRoutes.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

const startServer = async () => {
  try {
    connectDB(uri);

    app.listen(5000, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

app.use("/api", UserRoutes);
