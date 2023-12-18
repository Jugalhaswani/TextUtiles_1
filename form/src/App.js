import logo from './logo.svg';
import './Appa.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

let name="Jugal"; 

function App() {
  const [mode, setmode] =useState('light'); // whether dark mode is enabled or not 
  const [alert, setalert] =useState(null);

  const showalert =(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const removebodyclass=()=>{
  document.body.classList.remove('bg-Success');
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-secondary');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-light');
  }
  const toggleMode =(cls)=>{
    removebodyclass();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = `#042743`;
      showalert("Dark Mode has been Enabled", "Success")
    }
    
    else{
      setmode('light')
      document.body.style.backgroundColor =`white`;
      showalert("Light Mode has been Enabled", "Success");
    }
  }
  return (
    <Router>
<Navbar Title="TextUtils" mode ={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path='/' element={<TextForm showalert={showalert} heading="Enter the Text to Analyze Below" mode={mode}/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
</Routes>
</div>
</Router>
  );
}

export default App;
