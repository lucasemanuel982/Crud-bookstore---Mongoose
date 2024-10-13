import  express  from "express";
import db from "./config/dbConnect.js";


import routes from "../scr/Routes/index.js";
import manipuladorDeError from "./middlewares/manipuladorDeError.js";
import manipulador404 from "./middlewares/manipulador404.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () =>{
  console.log("conexão com o banco feita com sucesso!");
});

const app = express();

app.use(express.json());
app.use(manipuladorDeError);

routes(app);
app.use(manipulador404);

export default app;

