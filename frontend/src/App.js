import { useState ,useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './pages/Form';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  const [userExist,setUserExist] = useState(false);
  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if(admin){
      setUserExist(true);
    }else{
      setUserExist(false);
    }
    console.log(userExist);
  },[userExist]);
  return (
    <BrowserRouter>
      <Navbar userExist={userExist} setUserExist={setUserExist} />
     <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login userExist={userExist} setUserExist={setUserExist} />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/admin" element={<Admin userExist={userExist} />}></Route>
        </Routes>
    
  </BrowserRouter>
  );
}

export default App;
