/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import Progress from '../components/Progress';
import '../index.css';

const Book = ({ book, clickHandler }) => {
  const removeBook = () => {
    clickHandler(book);
  };
  const progressPercentage = Math.floor(Math.random() * 90);
  const currentChapter = Math.floor(Math.random() * 20);
  return (
    <div>
      <ul className="book-ul">
        <li>
          <div className="category-title">
            <p className="category black-two">{book.category}</p>
            <p className="book-title black-two">{book.title}</p>
            <p className="author" id={book.id}>
              Suzanne Collins
            </p>
          </div>
          <div>
            <a href="#" id={book.id} className="flex-row-item Line-2">
              Comments
            </a>
            <a href="#" id={book.id} onClick={removeBook} className="flex-row-item Line-2">
              Remove
            </a>
            <a href="#" id={book.id} className="flex-row-item">
              Edit
            </a>
          </div>
        </li>
        <li className="percentage-box">
          <div className="flex-row">
            <div>
              <Progress percentage={progressPercentage} size={65} />
            </div>
            <div className="flex-column">
              <h2 className="flex-column-item percentage black-two">{`${progressPercentage}%`}</h2>
              <p className="percent-complete black-two flex-column-item">Completed</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex-row">
            <p className="Line-3" />
            <div className="current-chapter-box">
              <p className="black-two current-chapter-text">CURRENT CHAPTER</p>
              <p className="current-chapter-number black-two">{`Chapter ${currentChapter}`}</p>
              <button className="update-button white" type="button">
                UPDATE PROGRESS
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
