import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      ...this.state, id: Math.floor(Math.random() * 1000),
    };

    const { createBook } = this.props;

    createBook(book);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      id: '',
      title: '',
      category: '',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div>
        <p>{title}</p>

        <form onSubmit={this.handleSubmit}>
          <input name="title" type="text" value={title} onChange={this.handleChange} />
          <select name="category" value={category} onChange={this.handleChange}>
            {categories && categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
