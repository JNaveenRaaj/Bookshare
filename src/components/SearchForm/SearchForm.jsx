import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";
import styled from "styled-components"


const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  const Input = styled.input`
    border:0px;
  `

  return (
    
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
            
              <Input type = "text" className='form-control sinp' placeholder='Search For A Book..' ref = {searchText} ></Input>
              <button type = "submit" className='search flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-purple' size = {28} />
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm