import express from "express";
import db from "./config/db.js";
import routes from "./routes/index.js";
import cors from "cors";

db.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");
});

const app = express();

app.use(cors({ origin: 'http://localhost:8080' }))

app.use(express.json())

routes(app);

export default app;

