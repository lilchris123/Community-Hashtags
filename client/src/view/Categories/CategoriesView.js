import React, { Component } from "react";
import PropTypes from "prop-types";
import Categories from "../../shared/components/CategoriesDisplay/Categories";
import LoadingOverlay from "../../shared/components/LoadingOverlay/LoadingOverlay";
import style from './Categories.module.scss';

class CategoriesView extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { categories, isLoading } = this.props;
    return (
      <div className={`${style.content}`}>
        <h3 className="display-5 d-flex justify-content-center text-capitalize">
          List of Categories
        </h3>
        {isLoading.length > 0 && (
          <LoadingOverlay />
        )}
        <Categories categories={categories} />
      </div>
    );
  }
}

CategoriesView.propTypes = {
  isLoading: PropTypes.arrayOf(String).isRequired,
  categories: PropTypes.arrayOf(String).isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default CategoriesView;
