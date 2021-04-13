/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import '../index.css';

const Book = ({ book, clickHandler }) => {
  const removeBook = () => {
    clickHandler(book);
  };
  return (
    <div>
      <ul className="book-ul">
        <li>
          <div className="category-title">
            <p className="category black-two">{book.category}</p>
            <p className="book-title black-two">{book.title}</p>
            <a href="#" id={book.id}>
              {book.author}
            </a>
          </div>
          <div>
            <a href="#" id={book.id} className="flex-row-item Line-2 padding-1">
              Comments
            </a>
            <a href="#" id={book.id} onClick={removeBook} className="flex-row-item Line-2 padding-1">
              Remove
            </a>
            <a href="#" id={book.id} className="flex-row-item Line-2 padding-1">
              Edit
            </a>
          </div>
        </li>
        <li className="percentage-box">
          <div className="flex-row">
            <div className="flex-column">
              <h2 className="flex-column-item percentage black-two">10%</h2>
              <p className="percent-complete black-two flex-column-item">Completed</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex-row">
            <p className="Line-3" />
            <div className="current-chapter-box">
              <p className="black-two current-chapter-text">CURRENT CHAPTER</p>
              <p className="current-chapter-number black-two">Chapter 2</p>
              <button className="update-button" type="button">
                <span className="update-button-text">UPDATE PROGRESS</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
