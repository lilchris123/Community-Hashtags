/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import "./Categories.scss";
import CategoryLink from "../CategoryLink/CategoryLink";

const Categories = (props) => {
  const { categories } = props;
  return (
    <>
      {categories ? (
        <div className="container">
          <div className="row categories-container">
            {categories.map((c, i) => (
              <CategoryLink
                key={c._id}
                category={c}
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
  categories: PropTypes.arrayOf(String).isRequired
};

export default Categories;
