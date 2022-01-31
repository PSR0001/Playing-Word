import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert"
import About from "./components/About";
import React,{useState} from 'react'
// using ract router DOM
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [alert , setAlert] = useState(null)

  const alertFunction = (message , type)=>{
    setAlert({
      meg: message,
      type: type
    })
  }

  const [mode , setMode] = useState('light')
  let toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      alertFunction("Light Mode Enable", "success")
      // set interval
      // setInterval(()=>{
      //   document.title = 'This is Free App'
      // },2000)
      // setInterval(()=>{
      //   document.title = 'My App'
      // },1500)
    }
    else{
      setMode('dark')
        document.body.style.backgroundColor = '#07074b'
        alertFunction("Dark Mode Enable", "success")
    }
  }

  setTimeout(()=>{
    setAlert(null)
  },2000)

  return (
    <>
     <Router>
      <Navbar title="React App" mode= {mode} toggleMode = {toggleMode}/>
      <Alert alert= {alert} />

      <Switch>
      {/*  always use exact keyword !!important*/}
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/">
    <div className="container">
    <Textarea heading = {'Enter Your Text Here'} mode= {mode}/>
    </div>
    </Route>
  </Switch>
   </Router>
    </>
  );
}

export default App;
