import mongoose, { mongo } from "mongoose";
import autopopulate from "mongoose-autopopulate";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: { 
      type: String, 
      required: [true, "O título é obrigatório"] },
    autor: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "autores", 
      required: [true, "O(a) autor(a) é obrigatório"],
      autopopulate: true },
    editora: { 
      type: String, 
      required: [true, "A editora é obrigatório"], 
      enum: {
        values: ["Editora Guarabira", "Editora Solânea"], 
        message: 'Os valore {VALUE}, não é permitido.'
      }
    },
    numeroDePaginas: { 
      type: Number, 
      validate: {
        validator: (valor) => {
          return valor >=15 &&  valor <= 5000;
        },
        message: "O número de páginas deve ter entre 15 a 5000."
      }
    }
  }
);

const livros = mongoose.model("livros", livroSchema.plugin(autopopulate));

export default livros;