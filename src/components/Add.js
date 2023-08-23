import React,{useState} from 'react'
import { Modal, Button } from "react-bootstrap";
import {db} from "../config/firebase_config"
import {collection,addDoc} from "firebase/firestore"




function Add() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const userCollectionRef = collection(db, "userNotes")

  // Set New Movie States
  const [newTitle, setNewTitle] = useState("")
  const [newDetail, setNewDetail] = useState("")
  const [newDate, setNewDate] = useState(null)
  const [newColor, setNewColor] = useState("")

  const submitNote = async () => {
    alert("Your Response has been Submitted")
    try {
      await addDoc(userCollectionRef, {
        Title: newTitle,
        Detail: newDetail,
        Date: newDate,
        Color: newColor,
    
     

      })
    } catch (error) {
      console.error(error)
    }


  }





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
                        <input type="text" name="title"  placeholder='Title' onChange={(e) => setNewTitle(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Detail</h3>
                        <input type="text" name="title"  placeholder='Detail'  onChange={(e) => setNewDetail(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Date</h3>
                        <input type="datetime-local" name="title"  placeholder='Title'  onChange={(e) => setNewDate(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Color</h3>
                        <input type="color" name="title" style={{border:"none"}}  onChange={(e) => setNewColor(e.target.value)}/>
                        </label>
                        
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={submitNote}>
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