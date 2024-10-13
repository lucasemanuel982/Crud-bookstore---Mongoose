import "dotenv/config";
import app from "./scr/app.js";
const porta = process.env.PORT || 300;

app.listen(porta, ()=> {
  console.log(`Servidor executando em http://localhost: ${porta} `);
});