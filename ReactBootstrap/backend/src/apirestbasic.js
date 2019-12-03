const express = require('express');
// GET, PUT, DELETE, POST

const app = express();

app.get('/', function(req, res) {

     res.json({ nome : "João", idade: 30 , telefone : "(61) 99999-9999"});
  
});
// query params http://localhost:4000/alunos?idade=20&nome=Pedro
app.get('/alunos', function(req, res) {

     res.json({ idade : req.query.idade});
  
});
// route params http://localhost:4000/alunos/3
app.delete('/alunos/:id', function(req, res) {

     res.json({ id : req.params.id});
  
});
app.put('/alunos/:nome', function(req, res) {

     res.json({ nome : req.params.nome});
  
});
// body params http://localhost:4000/alunos
app.use(express.json())
app.post('/alunos', function(req, res) {

     res.json(req.body);

});
app.listen(4000);