import React, { useState } from 'react'
import './LoginSignup.css';
const LoginSignup = () => {
    const [action,setAction]=useState("Sign Up");
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
    
        e.preventDefault();

        document.write(`You're Successfully Logged In! ${name}`);    

    }
  return (
    <>
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:
        <div className='input'>
            
            <input type='text' placeholder='Enter Name'/>
        </div>}
        <div className='input'>
            
            <input type='email' placeholder='Enter Email'/>
        </div>
        
        <div className='input'>
           
            <input type='password' placeholder='Enter Password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:
      <div className="forgot-password">Lost Password? <span>Click Here</span></div>
  }
 <form onSubmit = {handleSubmit}>
     {/* <input onChange = {(e) => setName(e.target.value)} value = {name}></input> */}
     <button className='b' type = 'submit'>Submit</button>
 </form>
      <div className='submit-container'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      
    </div>
     
 </>
  )
}

export default LoginSignup
