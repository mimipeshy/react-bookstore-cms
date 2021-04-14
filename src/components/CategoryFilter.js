import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const categories = ['CATEGORIES', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const CategoryFilter = ({ clickHandle, filter }) => {
  const changeHandle = (e) => {
    if (e.target.value === 'All') {
      clickHandle(categories.filter((cat) => cat !== 'All'));
    } else {
      clickHandle([e.target.value]);
    }
  };
  return (
    <div className="black-two">
      <select className="top-category" id="filter" value={filter} onChange={changeHandle}>
        {categories.map((cat) => (
          <option value={cat} key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  clickHandle: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default CategoryFilter;
