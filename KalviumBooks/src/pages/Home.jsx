// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home({ searchInput = '' }) {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: {
          Authorization: "whatever-you-want",
        },
      })
      .then((res) => {
        console.log(res.data.books);
        setBooks(res.data.books);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredBooks(filtered);
  }, [searchInput, books]);

  return (
    <div>
      <div className='wrapper'>
        {filteredBooks.length === 0 ? (
          <div>No books found with the given search input.</div>
        ) : (
          filteredBooks.map((book) => {
            return (
              <div className='book'  key={book.id}>
                <div > 
                <img
                    src={book.imageLinks.thumbnail}
                    alt="Book"
                    style={{ cursor: "pointer" }}
                  />
                  <h3> {book.title}</h3>
                  <h4> By- {book.authors}</h4>
                  <h4> {book.averageRating} Stars</h4>
                  <h4>Free</h4>
                  
                  </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
