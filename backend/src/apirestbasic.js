const express = require('express');
const mongoose = require('mongoose');
const alunoController = require('./controllers/AlunoController');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://pwa:pwa123@testesmongodb-4irx5.mongodb.net/testpwa?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true  
});
/*
app.use(express.static(path.join(__dirname,'..','..','frontend','build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..','..','frontend','build', 'index.html'));
});*/
 app.get('/alunos', alunoController.show);
//req.query =  query params
app.get('/alunos/filtro', alunoController.index);

//req.params  = route params (post, put, delete)
app.delete('/alunos/:id', alunoController.destroy);



// req.body = body params (JSON) (post e put )
app.use(express.json()); //necessário para compreensão de um corpo no formato JSON

app.put('/alunos/:id', alunoController.update);

app.post('/alunos', alunoController.store );
/*app.post('/alunos', function(req, res) {

     res.json(req.body);
});*/

app.listen(3000);