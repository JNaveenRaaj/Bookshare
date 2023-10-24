import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import styled from "styled-components";

const Navbar = () => {

  const Nav = styled.div`
    .navbar{
    padding: 1.8rem 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.navbar-brand{
    width: 90px;
}
.navbar-brand span{
    margin-left: 2rem;
}
.brand-and-toggler{
    width: 100%;
}
.navbar-content{
    display: flex;
    width: 100%;
}
.navbar-toggler-btn{
    transition: var(--transition);
    z-index: 11;
}
.navbar-collapse{
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
    background-color: var(--black-color);
    height: 100%;
    width: 280px;
    display: flex;
    padding: 10rem 3rem 0 3rem;
    transform: translatex(100%);
    transition: var(--transition);
}
.show-navbar-collapse{
    transform: translateX(0);
}
.nav-item{
    margin-bottom: 1.4rem;
}
.nav-link{
    transition: var(--transition);
}
.nav-link:hover{
    color: var(--purple-color);
}

@media screen and (min-width: 992px){
    .navbar-collapse{
        position: relative;
        height: auto;
        padding: 0;
        width: 100%;
        background-color: transparent;
        transform: translateX(0);
        justify-content: flex-end;
    }
    .navbar-toggler-btn{
        display: none;
    }
    .nav-item{
        margin-bottom: 0;
        margin-left: 2.8rem;
    }
    .nav-link{
        color: var(--black-color);
        font-size: 1.7rem;
        font-weight: 500!important;
        opacity: 0.8;
    }
    .navbar-nav{
        display: flex;
    }
}
  `

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <Nav>
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookshare</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/sell" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Sell</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/donation" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Donation</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Login/Signup</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
            </li>
          </ul>
        </div>                                                                                                       
      </div>
    </nav>
    </Nav>
  )
}

export default Navbar