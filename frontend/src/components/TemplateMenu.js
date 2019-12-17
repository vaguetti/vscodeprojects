import React from 'react';
import Menu from '../components/Menu';
//import {Link} from 'react-router-dom'; 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
//import Formulario from './components/Formulario';
//import Relatorio from './components/Relatorio';
//import Logo from './Logo';
import 'bootstrap/dist/css/bootstrap.min.css';

function TemplateMenu(props) {

   
    return (
    <>
      <Container>
       <Row>
         <Col>
          <Menu/>
         </Col>
       </Row> 
       <Row>
         <Col>
         {props.component(props)}
         </Col>
       </Row>
      </Container> 
    </>
  );
}

export default TemplateMenu;
