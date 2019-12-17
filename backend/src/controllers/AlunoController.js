// index, show, store, update, destroy
const Aluno = require('../models/Aluno');
const mongoose = require('mongoose');

module.exports = {
    
       async store(req,res)
       {        
           let aluno = {
                nome : req.body.nome,
                email : req.body.email
           }

           const verifyAluno = await Aluno.findOne({email : req.body.email});
           if(!verifyAluno)
               aluno = await Aluno.create(aluno);
            else
               aluno = verifyAluno                 
           return res.json(aluno);
          
       },

       async show(req,res)
       {
           let alunos = await Aluno.find();
           if(!alunos)
               alunos = { message : "Nenhum aluno Encontrado"};
           return res.json(alunos);
       },
       async index(req,res)
       { 
           const email = req.query.email;
           let aluno = await Aluno.findOne({ email : email});
           if(!aluno)
               aluno = { message : "Nenhum aluno Encontrado"};
           return res.json(aluno);
       },
       async indexId(req,res)
       { 
           const aluno_id = req.params.id;
           let aluno = await Aluno.findById({ _id : aluno_id});
           if(!aluno)
               aluno = { message : "Nenhum aluno Encontrado"};
           return res.json(aluno);
       },
       async destroy(req, res)
       { 
           //const id = req.params.id;
           //console.log(id);
           //let aluno = await Aluno.findByIdAndDelete({ _id : mongoose.Types.ObjectId(id)});
           await Aluno.findByIdAndRemove(req.params.id);
           //if(!aluno)
           //    aluno = { message : "Nenhum aluno Encontrado"};
           //return res.json(aluno);
           return res.send();
       },
       async update(req, res)
       { 
        let aluno = await Aluno.findByIdAndUpdate( req.params.id, req.body, {new : true});  
         
        if(!aluno)
             aluno = { message : "Nenhum aluno Encontrado"};
        return res.json(aluno);
       }
};