/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

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
    <>
      <CategoryFilter clickHandle={handleFilterChange} filter={filter} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {renderBooks.map((book) => (
            <Book book={book} clickHandler={handleRemoveBook} key={book.id} />
          ))}
        </tbody>
      </table>
    </>
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
