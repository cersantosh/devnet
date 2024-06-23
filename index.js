import express, { urlencoded } from "express";
import connectToDatabase from "./db/connection.js";
import router from "./routes/routes.js";
import socketHandler from "./controllers/api/v1/message/socket.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(router);

const server = app.listen(process.env.PORT, async () => {
  await connectToDatabase();
  console.log("Server is running on port : ", process.env.PORT);
});

socketHandler(server);
