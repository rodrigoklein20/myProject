import express from "express";
import Sequelize from "sequelize";
import db from "./config/db.js";
import routes from "./routes/index.js";

db.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");
});

const app = express();

app.use(express.json())

routes(app);

export default app;

