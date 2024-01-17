import React, { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = ({userExist,setUserExist}) => {
    const [data, setData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setData((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };
  const login = async() => {
    //sending data to server
    const res=await fetch(`http://localhost:5100/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })

    if(res.status==200)
    {
        setUserExist(true);
        localStorage.setItem('admin',true);
        navigate("/admin");
    }
    else if(res.status==401)
    {
        alert('Invalid Credential');
    }
    else
    {
        alert('Enter Email and password both');
    }
      
  };
  return (
    <div id="Login">
      <div className="container">
        <div className="box">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="123@gmail.com"
          />
        </div>
        <div className="box">
          <label htmlFor="Password">Password:</label>
          <input
            type="text"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="********"
          />
        </div>
        <div className="btn" onClick={login}>
          login
        </div>
      </div>
    </div>
  );
};

export default Login;
