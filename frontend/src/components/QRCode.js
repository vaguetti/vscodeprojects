import React, {useState} from 'react';
import QrReader from 'react-qr-reader';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
//import TemplateMenu from './TemplateMenu';

 function QRCode(props){

        const history = props.history; 
        //console.log(history);
        
        const [qrcode,setQrcode] = useState('');
        
        let handleScan = data => {
          console.log(data);
          if (data) {
            setQrcode(data);
            
          }
        }
        let handleError = err => {
          console.error(err);
        }

      function enviaSubmit(event){
                event.preventDefault();
                localStorage.setItem('aluno_id', qrcode); 
                //alert(qrcode);
                //TemplateMenu.props(BuscaQRCode);
                history.push('/buscaqrcode');
                history.go();
        }
    return(
      
      <div>
      <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
               <Form onSubmit={enviaSubmit} >
        <Form.Group controlId="formBasicNome">
          <Form.Label>Leitura do QR Code</Form.Label>
          <Form.Control
           type="text" 
           value = {qrcode}
          />
        </Form.Group>
          <Button variant="primary" type="submit">
            Buscar
          </Button>
       </Form>
      </div>
    
    );
}
export default QRCode;
