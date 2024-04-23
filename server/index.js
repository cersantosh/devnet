import express from "express";
import connectToDatabase from "./db/connection.js";
import router from "./routes/routes.js";
const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, async () => {
  await connectToDatabase();
  console.log("Server is running on port : ", process.env.PORT);
});
