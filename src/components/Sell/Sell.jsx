import React, { Component } from 'react';
import axios from 'axios';
import './Sell.css'
class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookName: '',
      authorName: '',
      price: '',
      publishYear: '',
      bookImage: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { bookName, authorName, price, publishYear, bookImage } = this.state;

    // Create a data object to send to the API
    const data = {
      bookName,
      authorName,
      price,
      publishYear,
      bookImage,
    };

    try {
      // Send a POST request to the API endpoint
      const response = await axios.post('http://localhost:3001/bookroute/post', data);

      // Handle the response as needed
      console.log('Response from the API:', response.data);

      // Clear the form
      this.setState({
        bookName: '',
        authorName: '',
        price: '',
        publishYear: '',
        bookImage: '',
      });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Post Book Details</h1>
        {/* <img className='sell' src='https://c4.wallpaperflare.com/wallpaper/767/594/322/books-library-bokeh-depth-of-field-wallpaper-preview.jpg'></img> */}
        <form className='form' onSubmit={this.handleSubmit}>
        
        <div className='row'>
          <div className='c1'>
          <div>
            <label>Book Name</label>
            <input type="text" name="bookName" placeholder='Bookname' value={this.state.bookName} onChange={this.handleChange} />
          </div>
          <div>
            <label>Author Name</label>
            <input type="text" name="authorName" placeholder='Author' value={this.state.authorName} onChange={this.handleChange} />
          </div>
          <div>
            <label>Price</label>
            <input type="number" name="price" placeholder='Price' value={this.state.price} onChange={this.handleChange} />
          </div>
          <div>
            <label>Publish Year</label>
            <input type="date" name="publishYear" placeholder='Year' value={this.state.publishYear} onChange={this.handleChange} />
          </div>
          <div>
            <label>Book Image URL</label>
            <input type="url"name="bookImage" placeholder='URL' value={this.state.bookImage} onChange={this.handleChange} />
          </div>
          <button className='btn' type="submit">Submit</button>
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default BookForm;