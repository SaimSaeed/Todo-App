import React, {useState} from 'react'
import { db } from "../config/firebase_config"
import { deleteDoc, doc,updateDoc } from "firebase/firestore"
import { Modal, Button } from "react-bootstrap";





function UserNotes(props) {

  const deleteNote = async (id) => {

    const NotesDoc = doc(db, "userNotes", id)
    await deleteDoc(NotesDoc)
    alert("Your Data has been Deleted")


  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [updateTitle, setUpdateTitle] = useState("")
  const [updateDetail, setUpdateDetail] = useState("")
  const [updateDate, setUpdateDate] = useState("")
  const [updateColor, setUpdateColor] = useState("")



  const UpdateNotes = async (id) => {

    const NoteDoc = doc(db, "userNotes", id)
    alert("Your Data has been Updated")
    await updateDoc(NoteDoc, {
      Title: updateTitle,
      Detail: updateDetail,
      Date: updateDate,
      Color: updateColor,
    })

  }


  
  return (
    <div className='note-contain' style={{ position: 'relative' }}  >
      <div className='note' style={{ backgroundColor: `${props.color}`, marginLeft: "10px", borderRadius: "5px", overflow: "hidden" }}>
        <h2> {props.title}</h2>
        <p>{props.detail}</p>




      </div>
      <div className='trash' style={{ position: 'absolute', bottom: "4%", left: "82%", display: "flex"}} >
       


        <div style={{ cursor: "pointer" }} onClick={handleShow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg>
        </div>


        <div style={{ cursor: "pointer" }} onClick={()=>deleteNote(props.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
          </svg></div>

      </div>

      <Modal show={show} onHide={handleClose} size="lg"  className='mt-5'>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='flex-wrap'>
                            <label style={{width:"30%"}}><h3>Title</h3>
                        <input type="text" name="title"  placeholder='Title' onChange={(e) => setUpdateTitle(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Detail</h3>
                        <input type="text" name="title"  placeholder='Detail'  onChange={(e) => setUpdateDetail(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Date</h3>
                        <input type="datetime-local" name="title"  placeholder='Title'  onChange={(e) => setUpdateDate(e.target.value)}/>
                        </label>
                        <br/>
                        <label style={{width:"30%"}}><h3>Color</h3>
                        <input type="color" name="title" style={{border:"none"}}  onChange={(e) => setUpdateColor(e.target.value)}/>
                        </label>
                        
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => UpdateNotes(props.id)}>
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
          
      </div>




      )
}

      export default UserNotes