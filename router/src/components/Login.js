import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Login.css'

export default function Login() {
  return (
    
        <div className='body'>
        <div className='box'>
        <h2>LOGIN</h2>
        <h4>Email</h4>
        <input type="text" placeholder='abc@gmail.com'/>
        <h4>Password</h4>
        <input type="password" placeholder='123456'/><br/>
        <input type='checkbox'/>Remember me?<br/>
        <button id='btn'>LOGIN</button><br/>
        <h6>Forgot Password?</h6>
        <i class="fa fa-google"></i>
        <i class="fa fa-facebook-f"></i>
        <i class="fa fa-linkedin"></i>
        <p>Need an account? <Link to='/'>SIGN UP</Link></p>
        </div>
    </div>
  )
}
