import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ImgShowModal(props) {
  const canvasRef = useRef(null);
  const Download = async () => {
    try {
      const response = await fetch(props.imgurl); // Replace with your API endpoint
      const blob = await response.blob();

      // Create a data URL for the image
      const dataUrl = URL.createObjectURL(blob);

      // Create a downloadable link
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'downloaded-image.jpg'; // Specify the filename
      // setDownloadLink(link);

      // Simulate a click on the link to trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.imghead}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe ref={canvasRef} frameBorder={0} style={{width:"100%",height:"100%"}} src={props.imgurl} ></iframe>
        {/* <img  src={props.imgurl} /> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={Download}>Download Document</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImgShowModal