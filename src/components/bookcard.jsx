//components/BookCard.jsx
import React from "react";
import "./BookCard.css"; // Import CSS file

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <h2 className="book-title">{name}</h2>
      <p className="book-genre">Genre: {genre}</p>
      <p className="book-author">By {author}</p>
    </div>
  );
};

export default BookCard;