import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookShare</h2>
            <p className='fs-17'>A revolutionary application designed to foster a vibrant community of book enthusiasts and promote the sharing of knowledge. BookSwap provides a seamless platform for users to donate, sell, and buy books, all in one convenient place. Whether you have books collecting dust on your shelves, are looking to expand your personal library, or simply wish to connect with fellow bookworms, BookSwap has you covered. Our user-friendly interface enables you to upload books you no longer need, setting your own price or offering them for free. Explore a vast catalog of titles in various genres, connect with like-minded readers, and enjoy the thrill of discovering hidden literary gems. With features like user reviews, secure payment options, and a robust search engine, BookSwap ensures an engaging and trustworthy book-sharing experience. Join us in revolutionizing the way we connect, share, and savor the magic of books, making knowledge accessible and affordable to all. BookSwap: Where every book has a story to tell, and every reader finds their next adventure.</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
