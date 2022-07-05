import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//mongo_uri_local
//mong_uri_container
export default function connectToDB() {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {
      console.log("Successfully connected to MongoDB");
    })
    .catch((err) => {
      console.error("Connection error: ", err);
    });
}
