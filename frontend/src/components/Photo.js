import React from 'react';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Webcam from 'react-webcam';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function Photo(props) {
    function handleTakePhoto (dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
      }
     
      function handleTakePhotoAnimationDone (dataUri) {
        // Do stuff with the photo...
        console.log(dataUri);
        console.log('takePhoto');
      }
     
      function handleCameraError (error) {
        console.log('handleCameraError', error);
      }
     
      function handleCameraStart (stream) {
        console.log('handleCameraStart');
      }
     
      function handleCameraStop () {
        console.log('handleCameraStop');
      }
     
      return (
        <>
        <Form >
        <Form.Group controlId="formBasicNome">
          <Form.Label>Clique para Capturar a imagem</Form.Label>
          <Form.Label>
       
          <Camera
          onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
          onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
          onCameraError = { (error) => { handleCameraError(error); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.JPG}
          imageCompression = {0.97}
          isMaxResolution = {true}
          isImageMirror = {false}
          isSilentMode = {false}
          isDisplayStartCameraError = {true}
          isFullscreen = {false}
          sizeFactor = {1}
          onCameraStart = { (stream) => { handleCameraStart(stream); } }
          onCameraStop = { () => { handleCameraStop(); } }
        />
       

          </Form.Label>
        </Form.Group>
        </Form>
   
        </>
      );
  /*  const videoConstraints = {
        facingMode: "environment"//{ exact: "environment" }
      };

      const webcamRef = React.useRef(null);
 
      const capture = React.useCallback(
      () => {
         const imageSrc = webcamRef.current.getScreenshot();
         console.log(imageSrc);
            },
         [webcamRef]

        
  );
   
      return (
        <>
        <Webcam //  videoConstraints={videoConstraints} />;
        audio={false}
        height={320}
        //ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={568}
        videoConstraints={videoConstraints} />
        <button onClick={capture}>Capture photo</button>
        </>
      );
      */
}

export default Photo;