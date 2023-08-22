import React,{useState} from 'react'
import { Modal, Button } from "react-bootstrap";


function Add() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
            <div className='note-contain'>

        <div className='note new-note'>
           <button onClick={handleShow} >+</button>
           <Modal show={show} onHide={handleClose} size="lg"  className='mt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='flex-wrap'>
                            <label style={{width:"30%"}}><h3>Title</h3>
                        <input type="text" name="title"  placeholder='Title'/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Content</h3>
                        <input type="text" name="title"  placeholder='Content'/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Date</h3>
                        <input type="date" name="title"  placeholder='Title'/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Color</h3>
                        <input type="color" name="title" style={{border:"none"}}/>
                        </label>
                        
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary">
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
          

    </div>
    
   

    </div>


  )
}

export default Add