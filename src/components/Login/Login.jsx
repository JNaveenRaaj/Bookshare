import React from "react";
import styled from "styled-components"
import { Link } from 'react-router-dom';
import logoImg from "../../images/logo.png";
import "./login.css"

const Wrap = styled.section`
  

  input {
    width: 90%;
    height: 50px;
    border-radius: 20px;
    background-color: var(#fdf9ff);
    border: 2px solid var(#796781);
    padding: 10px 25px;
    font-size: 16px;
    color: var(#504e70);
    transition:all 0.3s ease;
  }
`

function Login() {
  return (
    <Wrap>
    
    <div className="row" style={{overflow: 'hidden'}}>
      <div className="column">
      <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>Login</span>
          </Link>
      <br></br>
      <p>New User? <a className="link" href="/signup">SignUp</a></p>
      <div>
        <label>Username</label>
        <input type="email" placeholder='Email' />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder='Password' />
      </div>
      <button className="btn">Login</button>
      </div>
    </div>
      



    </Wrap>
  )
}

export default Login;