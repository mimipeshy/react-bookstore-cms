import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BookLists = ({ books }) => (
  <div>
    <h3>Available books for reading: </h3>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book
            book={book}
            key={book.id}
            title={book.title}
            category={book.category}
          />
        ))}
      </tbody>
    </table>
  </div>
);

BookLists.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  books: state,
});

export default connect(mapStateToProps)(BookLists);
