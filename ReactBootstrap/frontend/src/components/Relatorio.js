import React from 'react';
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css';


function Relatorio() {
  return (
    <>
  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>E-mail</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>João</td>
      <td>j@ifb</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Pedro</td>
      <td>p@ifb</td>
    </tr>
  </tbody>
</Table>
   </>
  );
}

export default Relatorio;
