import express from "express";
import { config } from "dotenv";
import usersRouter from "./routes/users.routes.js";
import phoneRouter from "./routes/phone.route.js";
import ContactRouter from "./routes/contact.route.js";
import OrderRouter from "./routes/order.route.js"
import cors from "cors";
import cookieParser from 'cookie-parser';


config();

const app = express();



app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", usersRouter);
app.use("/api/phones", phoneRouter);
app.use("/api/subject/", ContactRouter);
app.use("/api/register", OrderRouter);

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.listen(3000, () => {
  console.log("App running on port 3000");
});
