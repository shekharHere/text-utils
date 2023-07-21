
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [ mode, setMode ] = useState('light');
  const [ alert, setAlert ] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled!", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Dark Mode Disabled!", "Success");
    }
  }

  const showAlert = (message) => {
    setAlert({
      msg: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutUs="Know Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        {/* <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/> */}
        <Routes>
          <Route exact path='/'
            element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>}>
          </Route>
          <Route exact path='/about' element={<About mode={mode}/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
