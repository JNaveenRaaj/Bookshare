import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Sell from './components/Sell/Sell';
import Donation from './components/Donation/Donation';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Signup from './components/Login/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
          <Route path = "/login" element = {<Login />} />
          <Route path = "/sell" element = {<Sell />} />
          <Route path = "/donation" element = {<Donation />} />
          <Route path = "/signup" element = {<Signup/>} />
          <Route path = "/" element = {<Home />}>
          <Route path = "/about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

