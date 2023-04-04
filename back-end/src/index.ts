import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/index.routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(routes)

app.listen(3000, ()=> console.log("Server running..."));
