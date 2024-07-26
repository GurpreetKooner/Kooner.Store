import React, { useState } from "react";
import "../Pages/CSS/LoginSignUp.css";

export const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const login = async () => {
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data);

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/")
    }else{
      alert(responseData.errors)
    }
  };

  const signup = async () => {
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data);

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/")
    }else{
      alert(responseData.errors)
    }
  };

  return (
    <div className="loginsingnup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input name="username" value={formData.username} type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input name="email" value={formData.email} type="email" placeholder="Email Address" />
          <input name="password" value={formData.password} type="password" placeholder="Password" />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing I agree to the tearms of use & privacy policy.</p>
        </div>
        <button
          onClick={() => {
            state === "Sign Up" ? signup() : login();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p
            className="loginsignup-login"
            onClick={() => {
              setState("Login");
            }}
          >
            Already have an account? <span>Login here</span>
          </p>
        ) : (
          <p
            className="loginsignup-login"
            onClick={() => {
              setState("Sign Up");
            }}
          >
            Create an account? <span>Click here</span>
          </p>
        )}
      </div>
    </div>
  );
};
