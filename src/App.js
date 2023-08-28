import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import NotesScreen from './Screen/NotesScreen';
import RegisterScreen from "./Screen/RegisterScreen"
import LoginScreen from "./Screen/LoginScreen"
import TodayScreen from './Screen/TodayScreen';
import { auth } from './config/firebase_config';
import React ,{useEffect, useState}  from "react"

function App() {
  const [userName,setUserName] = useState("")
  useEffect(() => {
   
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else {
        setUserName("")
      }
      console.log(user)
    })
   
  }, []);
  return (
<>
<BrowserRouter>


<Routes>

  <Route path='/'  element={<NotesScreen name={userName}/>}/>
  <Route path='/register'  element={<RegisterScreen/>}/>
  <Route path='/login'  element={<LoginScreen/>}/>
  <Route path='/today'  element={<TodayScreen/>}/>



</Routes>




</BrowserRouter>






</>
  );
}

export default App;
