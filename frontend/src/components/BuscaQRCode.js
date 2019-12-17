import React, {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../services/api';


function BuscaQRCode() {
   const [aluno, setAluno] = useState('');

   useEffect(() => {
    async function buscaAlunos()
    {  const _id = localStorage.getItem('aluno_id');
       //const geturl = '/alunos/'+_id;
       //console.log(geturl);
       const response = await api.get('/alunos/'+_id);
       //console.log(response.data);
       setAluno(response.data);
       //localStorage.setItem('alunos',response.data);
       localStorage.removeItem('aluno_id');
    }
    buscaAlunos();
   }, []);
   return (
    <>
    <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
         <tr key={aluno._id}>
            
            <td>{aluno.nome}</td>
            <td>{aluno.email}</td>
          </tr>
                 
        </tbody>
</Table>
   </>
  );
}
// <th>#</th>
//<td>{aluno._id}</td>
export default BuscaQRCode;
