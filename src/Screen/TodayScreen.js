import React , {useState,useEffect}from 'react'
import {db} from "../config/firebase_config"
import {collection,query, where,getDocs} from "firebase/firestore"
import Notes from "../components/UserNotes"
import Navbar from '../components/Navbar'
import dayjs from "dayjs";


function TodayScreen(props) {

    const today = dayjs().format("YYYY-MM-DD");



const q = query(collection(db,"userNotes"),where("Date","==",today) )

    const userCollectionRef = collection(db, "userNotes")
    const [noteList, setNoteList] = useState([])
    const getNoteList = async () => {
    //   //Read the Data
    //     onSnapshot(q, (snapshot) => {
    //       setNoteList(snapshot.docs.map(doc => ({
    //         ...doc.data(),
    //         id: doc.id
          
    //       })))
    //     })
    //     console.log(noteList)
   
    try {
        const querySnapshot = await getDocs(q)
        // const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    const array = [];
querySnapshot.forEach((doc)=>{
    let data = doc.data()
    array.push(data)
})
        setNoteList(array)
        console.log(array)
      } catch (error) {
        console.error(error)
      }
  
  
    }
  
    useEffect(() => {
  
      getNoteList()
  
    });
  
  
   
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
  </div>
  
  </div>
  
  
  </div>
  </div>
 
    )
}

export default TodayScreen