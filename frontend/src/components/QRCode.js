import React, {useState} from 'react';
import QrReader from 'react-qr-reader';


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

    return(
      
      <div>
      <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{qrcode}</p>
      </div>
    
    );
}
export default QRCode;
