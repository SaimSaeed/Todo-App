import React ,{useState,useEffect}from 'react'
import Navbar from '../components/Navbar'
import Notes from "../components/UserNotes"
import Add from '../components/Add'
import {db} from "../config/firebase_config"
import {collection,getDocs,onSnapshot} from "firebase/firestore"


function NotesScreen(props) {
  const userCollectionRef = collection(db, "userNotes")
  const [noteList, setNoteList] = useState([])
  const getNoteList = async () => {
    //Read the Data
    //Set the Movie List

    // try {
    //   const data = await getDocs(userCollectionRef)
    //   const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //   setNoteList(filteredData)
    //   console.log(filteredData)
    // } catch (error) {
    //   console.error(error)
    // }
    

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

  }, []);





 
  return (
    <div className='notes-container'>
     

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