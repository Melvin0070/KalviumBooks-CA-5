import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";

const HomePage = ({ searchInput }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: {
          Authorization: "whatever-you-want",
        },
      })
      .then((res) => {
        const filteredBooks = res.data.books.filter((book) =>
          book.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setBooks(filteredBooks);
      })
      .catch((err) => console.log(err));
  }, [searchInput]);

  return (
    <div>
      
      <div className='wrapper'>

        {books.map((book) => (

          <div className='book' key={book.id}>

            <img 
              className="book-img"
              src={book.imageLinks.thumbnail}
              alt={book.title}
            />
            <h2>{book.title}</h2>

            <br />
            
            <p>By- {book.authors}</p>

            Ratings: {
              book.averageRating ? <span>{book.averageRating}★</span> : "No ratings yet"
            }

            <h2>Free</h2>

          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;



