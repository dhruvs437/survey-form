
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/admin.css'
const Admin = ({userExist}) => {
    const navigate = useNavigate();
    const getData = async ()=>{
        const res=await fetch(`https://survey-form-api-tau.vercel.app/admin`, {
        method: "get",
        })
        let data = await res.json();
        data = data.data;
        setData(data);
    }
    useEffect(() => {
        const admin = localStorage.getItem("admin");
        if(!admin){
            navigate("/login");
        }
        getData();
        
      },[]);
    const [data , setData] = useState([]);
  return (
    <div id='Admin'>
        {data.map((ele,ind)=>(
            <div key={ind} className="card">
                <div><b>Name : </b>{ele.name}</div>
                <div><b>Gender : </b>{ele.gender}</div>
                <div><b>Email : </b>{ele.email}</div>
                <div><b>Phone : </b>{ele.phone}</div>
                <div><b>Nationality : </b>{ele.nationality}</div>
                <div><b>Address : </b>{ele.address}</div>
                <div>{ele.message}</div> 
            </div>
        ))}
        

    </div>
  )
}

export default Admin
