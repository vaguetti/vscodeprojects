const express = require('express');

const app = express();


app.get('/', function(req, res) {

     res.json({ nome : "João", idade: 30 , telefone : "(61) 99999-9999"});
  
});

app.listen(4000);