import React,{useState} from 'react'
import "../styles/form.css"

const Form = () => {
    const [data,setData] = useState({name:"",gender:"male",email:"",address:"",message:"",phone:"",nationality:"India"});
    const handleChange = (e)=>{
        let name = e.target.name;
        let val = e.target.value;
        setData(prevState => ({
            ...prevState,
            [name]: val,
        }));
    }
    const submitIt = async() => {
        //sending data to server
        const res=await fetch(`http://localhost:5100/form`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            gender: data.gender,
            nationality: data.nationality,
            phone: data.phone,
            address: data.address,
            message: data.message,


          }),
        })
    
        if(res.status==200)
        {
            //navigate("/Admin");
            alert("form saved successfully");
        }
        else
        {
            alert('enter all details');
        }
          
      };
    const gender = ['male', 'female', 'N/A'];
    const nationality = ['India', 'America', 'Dubai'];
  return (
    <div id='Form'>
        <h1>Survey Form</h1>
        <div className="box">
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' value={data.name} onChange={handleChange} placeholder='Name'/>
        </div>
        <div className="box">
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' value={data.email} onChange={handleChange} placeholder='Email'/>
        </div>
        <div className="box">
            <label htmlFor="selectOption">Gender</label>
            <select name='gender' id="gender" value={data.gender} onChange={handleChange}>
                {gender.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                ))}
            </select>
        </div>
        <div className="box">
            <label htmlFor="selectOption">Nationality</label>
            <select name='nationality' id="nationality" value={data.nationality} onChange={handleChange}>
                {nationality.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                ))}
            </select>
        </div>
        <div className="box">
            <label htmlFor="address">Address:</label>
            <input type="text" name='address' value={data.address} onChange={handleChange} placeholder='Address'/>
        </div>
        <div className="box">
            <label htmlFor="phone">Phone:</label>
            <input type="text" name='phone' value={data.phone} onChange={handleChange} placeholder='phone'/>
        </div>
        <div className="box">
            <label htmlFor="message">Message:</label>
            <textarea  name='message' value={data.message} onChange={handleChange} placeholder='Write your message'/>
        </div>

        <div className="btn" onClick={submitIt}>Submit</div>
    </div>
  )
}

export default Form
