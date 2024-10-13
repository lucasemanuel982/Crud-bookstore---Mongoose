import express  from "express";
import livros from "./livrosRoutes.js";
import autores from "../Routes/autoresRoutes.js";

const routes = (app) =>{
  app.route("/").get((req, res)=>{
    res.status(200).send({titulo: "Harry Potter e o Cálice de fogo"});
  });

  app.use(
    express.json(),
    livros,
    autores
  );
};

export default routes;