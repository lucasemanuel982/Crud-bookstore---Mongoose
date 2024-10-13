import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: (valor)=> valor!== "",
    message: ({path}) => `O campo ${path} foi fornecido em branco.`
});

mongoose.Schema.Types.Number.set("validate", {
    validator: (valor)=> valor!== "",
    message: ({path}) => `O campo ${path} foi fornecido em branco.`
});