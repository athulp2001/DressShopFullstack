import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import'./AdReg.css'


const AdReg = () => {

  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate()

  const handilSubmit =(e)=>{
    window.alert("saved");
    e.preventDefault()
    axios.post("http://localhost:7000/register",{name,email,password})
    .then((res)=>{navigate("/login")})
    .catch((err)=>console.log(err))
  }


  return (
    <div className="mainDivAdreg" >
        <div className='fromDiv'>
        <h2 className='regH1'>SIGNUP</h2>
            <form onSubmit={handilSubmit}>
            <label className='labelnaem' htmlFor="" >Name</label><br />
            <input 
            autoComplete='off'
            onChange={(e)=>setName(e.target.value)}
            className='inpBox'
            placeholder='Enter your name'
            type="text"  
            /><br />
            <label className='labelnaem' htmlFor="">Email</label><br />
            <input 
            autoComplete='off'
            onChange={(e)=>setEmail(e.target.value)}
            className='inpBox'
            placeholder='Enter your email'
            type="email" 
            /><br />
            <label className='labelnaem' htmlFor="">Password</label><br />
            <input
            autoComplete='off'
            onChange={(e)=>setPassword(e.target.value)} 
            className='inpBox'
            placeholder='Enter passsword'
            type="text" 
            /><br />
            <button type='submit' className='SubmintBtnAdreg'>SUBMIT</button>

        </form>
        <div>
        <p>Already have an account?</p>
       <button className='LogButton'><Link className='linkLogin' to="/login">LOGIN</Link></button>
        </div>

        </div>
    </div>
  )
}

export default AdReg
