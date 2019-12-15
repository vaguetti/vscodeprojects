const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema(
    {
          nome : String,
          email : String
    }
);
module.exports = mongoose.model('Aluno', AlunoSchema);