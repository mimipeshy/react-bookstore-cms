import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import '../index.css';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({ id: Math.floor(Math.random() * 1000), title, category });
    setTitle('');
    setCategory('Action');
  };

  return (
    <div className="create-book">
      <p className="Line-4" />
      <span className="add-new-book-text warm-grey">ADD NEW BOOK</span>
      <form className="form">
        <label htmlFor="title">
          <input type="text" placeholder="Book title" id="title" onChange={handleChange} value={title} className="title-input" />
        </label>
        <label htmlFor="category">
          <select id="category" value={category} onChange={handleChange} className="category-input">
            {categories.map((cat) => (
              <option value={cat} key={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="ADD BOOK" onClick={handleSubmit} className="add-book-button azure" />
      </form>
    </div>

  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatch = {
  createBook,
};

export default connect(null, mapDispatch)(BooksForm);
