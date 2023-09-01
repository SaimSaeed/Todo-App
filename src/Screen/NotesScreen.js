import React ,{useState,useEffect}from 'react'
import Navbar from '../components/Navbar'
import Notes from "../components/UserNotes"
import Add from '../components/Add'
import {db} from "../config/firebase_config"
import {collection,onSnapshot} from "firebase/firestore"
import { Link } from 'react-router-dom'



function NotesScreen(props) {
  const userCollectionRef = collection(db, "userNotes")
  const [noteList, setNoteList] = useState([])
  const getNoteList = async () => {
    //Read the Data
      onSnapshot(userCollectionRef, (snapshot) => {
        setNoteList(snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        
        })))
      })
      console.log(noteList)
    

  }

  useEffect(() => {

    getNoteList()

  });





 
  return (
    <div className='notes-container'>
     <div style={{paddingLeft:"85%"}}>

<Link className='btn my-2'  to={"/login"} style={{backgroundColor:"white",color:" rgb(228, 55, 83)"}}>Login</Link>
<Link className='btn  mx-2'  to={"/register"} style={{backgroundColor:"white",color:" rgb(228, 55, 83)"}}>Register</Link>
</div>
    
      <div  className="notes-box"> 
 <div className='notes-left'>
<Navbar/>
</div>
<div className='notes-right'>

<h4 style={{textAlign:"center"}}>{props.name ? `Welcome! ${props.name}`:"Login Please!"}</h4>





<div className='notes-align'>

 { noteList.map((notes)=> {
  
   return  <Notes title={notes.Title}  detail={notes.Detail}  date={notes.Date}  color={notes.Color} id= {notes.id} />
  
  })

}
<Add/>
</div>

</div>


</div>
</div>
  )
}

export default NotesScreen