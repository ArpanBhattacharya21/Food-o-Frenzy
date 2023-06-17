import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import { Toast } from 'react-bootstrap';

export default function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();     //synthetic event
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials!");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }

  }


  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark bg-opacity-75 border-success rounded'  onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label"> Email address </label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='e.g. johndoe@hotmail.com'/>
            <div id="emailHelp" className="form-text"> We'll never share your email with anyone else. </div>
          </div>

          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label"> Password </label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" placeholder='eg. qwerty@1234'/>
          </div>

          <button type="submit" className="m-3 btn btn-success"> Submit </button>
          <Link to="/createuser" className='m-3 btn btn-danger'>I'm not registered yet!</Link>
        </form>
      </div>
    </div>
  )
}
