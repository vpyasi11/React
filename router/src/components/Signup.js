import React from 'react'
import '../css/Signup.css'
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div className='body'>
        <div className='box'>
            <h2>SIGN UP</h2>
            <h4>Email</h4>
            <input type="text" placeholder='abc@gmail.com'/>
            <h4>Password</h4>
            <input type="password" placeholder='123456'/><br/>
            <button id='btn'>SIGN UP</button><br/>
            <i class="fa fa-google"></i>
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-linkedin"></i>
            <p>Alreay a User ? <Link to='/Login'>LOGIN</Link></p>
        </div>
    </div>
  )
}
