import express from "express";
import connectToDatabase from "./db/connection.js";
import router from "./routes/routes.js";
import socketHandler from "./controllers/api/v1/message/socket.js";
import cors from "cors";
const app = express();


// app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({extended : true}))
app.use(router);

const server = app.listen(process.env.PORT, async () => {
  await connectToDatabase();
  console.log("Server is running on port : ", process.env.PORT);
});

socketHandler(server);
