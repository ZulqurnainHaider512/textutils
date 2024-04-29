
import { useState } from 'react';
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

 
function App() {

          const[alert, setAlert] =useState(null);
          const showAlert = (message,type) =>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
          }

  const [Mode,setMode]=useState('light');
  const toggleMode =()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#071155";

      showAlert("Darkmode has been enabled","success");
      document.title='TextUtils-Darkmode';

      // setInterval(() => {
      //   document.title='textutil is amazing mode';
      // }, 2000);

      // setInterval(() => {
      //   document.title='install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";

      showAlert("Lightmode has been enabled","success");
      document.title='TextUtils-Lightmode';
    }
     
  }

  return (
    <>
    
{/* <Navbar title="Textutils" aboutText="About testutils"/> */}
{/* <Navbar /> */}
<Router>
<Navbar title="Textutils" mode={Mode} toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container my-3">
<Routes> {/* Change Switch to Routes */}
            <Route exact path="/about" element={<About />} /> {/* Use element prop instead of component prop */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse bellow" mode={Mode} />} /> {/* Use element prop instead of component prop */}
          </Routes>
</div>
</Router>
</>
  );
}

export default App;
