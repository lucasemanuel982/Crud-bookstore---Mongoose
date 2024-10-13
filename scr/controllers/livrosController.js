import {autores, livros} from "../models/index.js";
import mongoose from "mongoose";
import NaoEncontrado from "../erros/NaoEncontrado.js";

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {
      const buscaLivros = livros.find();
      req.resultado = buscaLivros;

      next();
    } catch (error) {
        next(error);
    }
  };

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      const livroSalvo = await livro.save();
      res.status(201).send(livroSalvo);
    } catch (error) {
      res.status(500).send({message: `${error.message} - Falha ao cadastrar livro.`});
    }
  };

  static atualizarLivro = async (req, res,next) => {
    try {
      const id = req.params.id;
      const livroAtualizado = await livros.findByIdAndUpdate(id, req.body, { new: true });
      if (!livroAtualizado) {
        return next(new NaoEncontrado("Livro nçao localizado."));
      }else{
        res.status(200).json(livroAtualizado);
      }
    } catch (error) {
      next(error);
    }

  };

  static listarLivrosPorId = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido." });
    }

    try {
      const livro = await livros.findById(id);
      if (livro) {
        res.status(200).json(livro);
      } else {
        res.status(404).json({ message: "Livro não encontrado." });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Erro ao listar os livros" });
    }
  };


  static excluirLivro = async (req, res,next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "ID inválido." });
    }

    try {
      const livroDeletado = await livros.findByIdAndDelete(id);

      if (livroDeletado) {
        res.status(200).send({ message: "Livro excluído com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao excluir o livro." });
    }
  };

  static listarLivrosPorFiltro = async (req, res, next)=>{
    try {

      const busca = await processaBusca(req.query);

      if (busca !== null) {
        
        const  livrosResultados =  livros
        .find(busca)
        .populate("autor");

        req.resultado = livrosResultados;
        
        next();
      }else{
        console.log("Entrando aqui ?2");
        res.status(200).send([]);
      }

    } catch (error) {
      next(error);
    }
  };
}

async function processaBusca(parametros){
  const {editora, titulo, minPaginas, maxPaginas, nomeAutor} = parametros;

  let busca = {};
  
  if(editora) busca.editora = {$regex: editora, $options: "i"};
  if(titulo) busca.titulo = {$regex: titulo, $options: "i"};
  if (minPaginas || maxPaginas) busca.numeroDePaginas = {};
  if(minPaginas) busca.numeroDePaginas.$gte = minPaginas;
  if(maxPaginas) busca.numeroDePaginas.$lte = maxPaginas;
  
  if(nomeAutor){
    const autor = await  autores.findOne({nome: nomeAutor});
    if (autor !== null) {  
      busca.autor = autor._id;
    }else{
      busca = null;
    }
  }

  return busca;
}

export default LivroController;