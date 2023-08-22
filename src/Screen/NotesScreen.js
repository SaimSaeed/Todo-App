import React from 'react'
import Navbar from '../components/Navbar'
import Notes from "../components/notes"
import Add from '../components/Add'

function NotesScreen(props) {

 
  return (
    <div className='notes-container'>
     

      <div  className="notes-box"> 
 <div className='notes-left'>
<Navbar/>
</div>
<div className='notes-right'>

<h4 style={{textAlign:"center"}}>{props.name ? `Welcome! ${props.name}`:"Login Please!"}</h4>

<div className='notes-align'>
<Notes/>
<Add/>
</div>

</div>


</div>
</div>
  )
}

export default NotesScreen