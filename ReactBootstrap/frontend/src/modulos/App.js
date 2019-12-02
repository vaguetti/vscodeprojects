import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Menu from '../components/Menu';
import Logo from '../components/logo';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
//import Formulario from './components/Formulario';
//import Relatorio from './components/Relatorio';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Container>
       <Row>
         <Col>
          <Menu />
         </Col>
       </Row> 
       <Row>
         <Col>
         <Logo />
         </Col>
       </Row>
      </Container> 
    </>
  );
}

export default App;
