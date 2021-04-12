import PropTypes from 'prop-types';
import '../index.css';

const Book = ({ book, clickHandler }) => {
  const removeBook = () => {
    clickHandler(book);
  };
  return (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button onClick={removeBook} type="button">Remove Book</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
