import React from 'react';

const BooksForm = () => {
  const bookCategories = [
    'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi',
  ];
  return (
    <div>
      <h4>Book Form: </h4>
      <form>
        <input type="text" name="title" id="title" />
        <div>
          <select id="category">
            {bookCategories.map((category) => (
              <option value={category} key={category}>{category}</option>
            ))}
          </select>
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default BooksForm;
