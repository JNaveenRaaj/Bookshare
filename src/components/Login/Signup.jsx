import React from "react";
import styled from "styled-components";
import "./login.css"
import { Link } from 'react-router-dom';
import logoImg from "../../images/logo.png";

const Sign = styled.section`



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

function Signup() {

    return (
        <Sign>
            {/* <img className="log" src="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg"></img> */}
            <div className="row">
            <div className="column">
            <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>SignUp</span>
          </Link>
          <br></br>
                <p>Already Have an account? <a className="link" href="/login">Login</a></p>
                <div>
                    <label>Username</label>
                    <input type="email" placeholder='Email' />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" placeholder='Confirm Password' />
                </div>
                <button className="btn">SignUp</button>
            </div>
            </div>
        </Sign>

    )
}

export default Signup;