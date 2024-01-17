import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "../styles/navbar.css"
const Navbar = ({userExist,setUserExist}) => {
    const navigate = useNavigate();
    const logut = ()=>{
        localStorage.removeItem("admin");
        setUserExist(false);
        navigate("/");
    }
  return (
    <div id='navbar'>
      <Link  to ="/" className="logo">SURVEY</Link>
      <div className="buttons">
        {userExist
        ?<Link to ="/admin" className="btn1">All Forms</Link>
        :<Link to ="/login" className="btn1">Login</Link>
        }

        
        
        <Link to ="/form" className="btn2">Fill Form</Link>
        {userExist && <div to ="/admin" className="btn3" onClick={logut}>Logout</div>
        }
      </div>
    </div>
  )
}

export default Navbar
