/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import "./Categories.scss";
import CategoryLink from "../CategoryLink/CategoryLink";

const Categories = (props) => {
  const { categories, copiedHashtags, handleCopy } = props;
  return (
    <>
      {categories ? (
        <div className="container">
          <div className="row categories-container">
            {categories.map((c, i) => (
              <CategoryLink
                key={c._id}
                category={c}
                copiedHashtags={copiedHashtags}
                handleCopy={handleCopy}
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
Categories.propTypes = { 
  categories: PropTypes.arrayOf(String).isRequired,
  copiedHashtags: PropTypes.string,
  handleCopy: PropTypes.func.isRequired
};

Categories.defaultProps ={
    copiedHashtags: null
}
export default Categories;
