import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import'./Login.css'


const Login = () => {

        const [email,setEmail]=useState();
        const [password,setPassword]=useState();
        const navigate=useNavigate()

        const handleLogin = async (e) => {
          e.preventDefault();
  
          try {
              const response = await axios.post("http://localhost:7000/login", { email, password });
              if (response.status === 200) {
                  console.log(response.data.message);
                  localStorage.setItem("token", response.data.token);
  
                  const role = response.data.role;
                  if (role === "admin") {
                      navigate("/admin");
                  } else {
                      navigate("/user");
                  }
              } else {
                  console.log(response.data.message);
              }
          } catch (error) {
              console.log("Error during login", error);
              
          }
      };

  return (
<div className="mainDivAdreg" >
        <div className='fromDiv'>
        <h2 className='logH1'>LOGIN</h2>
            <form onSubmit={handleLogin}>
            <label className='loginlabel' htmlFor="">Email</label><br />
            <input 
            autoComplete='off'
            onChange={(e)=>setEmail(e.target.value)}
            className='loginBox'
            placeholder='Enter your email'
            type="email" 
            /><br />
            
            <label className='loginlabel' htmlFor="">Password</label><br />
            <input 
            autoComplete='off'
            onChange={(e)=>setPassword(e.target.value)}
            className='loginBox'
            placeholder='Enter passsword'
            type="text" 
            /><br />
            <button type="submit" className='SubmintBtnAdreg'>SUBMIT</button>

        </form>
        <div>
        <p className='pDoyou'>Do you have an Account?</p>
          <button className='regButton'>
            <Link className='logLink' to='/'>
            SIGNUP
            </Link>
          </button>
        </div>

        </div>
    </div>
  )
}

export default Login
