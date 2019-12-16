import React from 'react';
import QrReader from 'react-qr-reader2';


function QRCode(){

        let state = {
          result: 'No result'
        }
       
        let handleScan = data => {
          if (data) {
            this.setState({
              result: data
            })
          }
        }
        let handleError = err => {
          console.error(err)
        }

    return(
      <>
      <div>
      <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{state.result}</p>
      </div>
      </>
    );
}
export default QRCode;
