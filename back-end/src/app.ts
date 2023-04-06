import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/index.routes";
const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(routes)

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
    