import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './CategoryLink.scss';

const CategoryLink = (props) => {
    const { category } = props;
    return ( 
    <Col className='category-container m-2'>
        <Link to= {`/category/${category.category}`}> {category.category}</Link>
    </Col> );
}
 CategoryLink.propTypes = {
    category: PropTypes.shape().isRequired
 }
export default CategoryLink;