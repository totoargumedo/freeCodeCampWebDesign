import express from "express";
import "dotenv/config";
import router from "./router/index.js";
import cors from "cors";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import { initMongo } from "./daos/connection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(cors());

if (process.env.PERSISTENCE === "MONGODB") {
  initMongo();
}

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
