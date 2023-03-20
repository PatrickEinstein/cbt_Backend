import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import route from "./router/route.js"
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

/** app middlewares */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

/** appliation port */
const port = process.env.PORT || 8080;

/** routes */
app.use("/api", route); /** apis */

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

/** start server only when we have valid connection */
/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect("mongodb+srv://mongodb:onqJUekXZGHVWB2r@cluster0.i9foyr2.mongodb.net/CBT", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
