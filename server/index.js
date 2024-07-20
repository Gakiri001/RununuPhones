import express from "express";
import { config } from "dotenv";
import phoneRouter from "./routes/phone.route.js";
import ContactRouter from "./routes/contact.route.js"
import cors from "cors";


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

app.use("/api/phones", phoneRouter);
app.use("/api/subject/", ContactRouter)

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.listen(3000, () => {
  console.log("App running on port 3000");
});
