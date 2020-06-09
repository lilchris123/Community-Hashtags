/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import {Container, Row} from 'react-bootstrap'
import "./Categories.scss";
import CategoryLink from "../CategoryLink/CategoryLink";

const Categories = (props) => {
  const { categories } = props;
  return (
    <>
      {categories && (
        <Container className='my-3'>
          <Row>
            {categories.map((c, i) => (
              <CategoryLink key={c._id} category={c} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};
Categories.propTypes = {
  categories: PropTypes.arrayOf(String).isRequired,
};

export default Categories;
