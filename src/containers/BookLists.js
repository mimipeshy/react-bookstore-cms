/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import Book from './Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import '../index.css';

const BookLists = ({
  books, changeFilter, filter, removeBook,
}) => {
  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  const renderBooks = filter.length > 1 ? books : books.filter((book) => book.category === filter[0]);
  return (
    <div className="booklist-and-header">
      <div className="header">
        <div className="header-navbar">
          <h1 className="bookstore-cms azure">Bookstore CMS</h1>
          <h2 className="book-header black-two">Books</h2>
          <CategoryFilter clickHandle={handleFilterChange} filter={filter} />
        </div>
        <FaUserCircle className="user-icon azure" />
      </div>
      <div className="books-list">
        {renderBooks.map((book) => (
          <Book
            book={book}
            clickHandler={handleRemoveBook}
            key={book.id}
            completedProject={book.completedProject}
            currentChapter={book.currentChapter}
          />
        ))}
      </div>
    </div>
  );
};
BookLists.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatch = {
  removeBook, changeFilter,
};

export default connect(mapStateToProps, mapDispatch)(BookLists);
