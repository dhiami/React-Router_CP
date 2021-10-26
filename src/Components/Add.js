
import {Modal , Button , Form} from "react-bootstrap";
import {useState} from "react"
export default function Add({addHandler}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title , settitle]= useState("")
    const [description , setdescription]= useState("")
    const [img , setimg]= useState("")
    const [rate , setrate]= useState("")

    const addMovie=()=>{
      addHandler({id: Math.random ,title,rate,description,img})
      handleClose()
    }
    return (
      <>
        <Button className='addbutton'variant="primary" onClick={handleShow}>
        <i class="fas fa-plus-square"></i>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>Movie Title:</Form.Label>
    <Form.Control type="title" placeholder="Enter Movie Title" onChange={(e)=>settitle(e.target.value)} value={title} />
    <Form.Label>Movie Description:</Form.Label>
    <Form.Control type="description" placeholder="Enter Movie Description" onChange={(e)=>setdescription(e.target.value)} value={description} />
    <Form.Label>Poster URL:</Form.Label>
    <Form.Control type="poster" placeholder="Enter Poster URL" onChange={(e)=>setimg(e.target.value)}  value={img} />
    <Form.Label>Movie Rate:</Form.Label>
    <Form.Control type="poster" placeholder="Enter Movie Rate" onChange={(e)=>setrate(e.target.value)} value={rate} />
  </Form.Group>
  </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addMovie}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }