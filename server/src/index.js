import express, { json } from "express";
import connectToDB from "./config/db.js";
import userRoute from "./routes/user.route.js";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerDoc = require("../swagger.json");
// import swaggerDoc from "../swagger.json" assert {type:json};

const app = express();

app.use(json());
app.use(cors());
connectToDB();

const PORT = process.env.PORT || 3050;

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.use("/api/user", userRoute);

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(PORT, () => console.log(`Server running on ${PORT} `));

export default app;
