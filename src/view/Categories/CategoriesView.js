import React, { Component } from "react";
import PropTypes from "prop-types";
import Categories from "../../shared/components/CategoriesDisplay/Categories";
import style from './Categories.module.scss';

class CategoriesView extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div className={`${style.content}`}>
        <h3 className="display-5 d-flex justify-content-center text-capitalize">
          List of Categories
        </h3>
        <Categories categories={categories} />
      </div>
    );
  }
}

CategoriesView.propTypes = {
  categories: PropTypes.arrayOf(String).isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default CategoriesView;
