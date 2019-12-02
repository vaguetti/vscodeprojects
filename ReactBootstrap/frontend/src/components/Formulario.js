import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';


function Formulario() {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Entre com nome do aluno" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Entre com o e-mail do aluno" />
        </Form.Group>
    <Button variant="primary" type="submit">
      Cadastrar
    </Button>
</Form>
   </div>
  );
}

export default Formulario;
