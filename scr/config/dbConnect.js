import mongoose from "mongoose";

mongoose.connect(process.env.STTRING_CONEXAO_BD);

let db = mongoose.connection;

export default db;
