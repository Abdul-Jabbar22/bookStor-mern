import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book_route.js";

const app = express();
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000; // 3000
const URI = process.env.MongoDBURI;

//connect to mongo db

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongooDB");
} catch (error) {
  console.log("Error:", error);
}
//defining routes

app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
