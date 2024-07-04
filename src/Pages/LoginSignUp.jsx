import React from 'react'
import "../Pages/CSS/LoginSignUp.css"

export const LoginSignUp = () => {
  return (
    <div className='loginsingnup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text"  placeholder='Your Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing I agree to the tearms of use & privacy policy.</p>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>

      </div>
      
    </div>
  )
}
