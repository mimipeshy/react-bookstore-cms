import React from 'react';

const BooksForm = () => {
  const bookCategories = [
    'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi',
  ];
  const [title, setTitle] = userState('');
  const [category, setCategory] = userState('');

  const handleChange = (event) => {
    if (event.target.id === 'title') {
      setTitle(event.target.value);
    } else {
      setCategory(event.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('submitted');
  };

  return (
    <div>
      <h4>Book Form: </h4>
      <form>
        <input type="text" name="title" id="title" onChange={handleChange} />
        <div>
          <select id="category" value={category} onChange={handleChange}>
            {bookCategories.map((category) => (
              <option value={category} key={category}>{category}</option>
            ))}
          </select>
        </div>
        <input type="submit" value="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default BooksForm;
