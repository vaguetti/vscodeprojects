import React, {useState} from 'react';
import QrReader from 'react-qr-reader';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

function QRCode(){

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
                alert(qrcode);
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
           disable = "true"
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
