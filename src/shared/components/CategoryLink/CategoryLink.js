import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './CategoryLink.scss';

const CategoryLink = (props) => {
    const { category } = props;
    return ( 
    <div className='category-container col m-2'>
        <Link to= {`/category/${category.category}`}> {category.category}</Link>
    </div> );
}
 CategoryLink.propTypes = {
    category: PropTypes.shape().isRequired
 }
export default CategoryLink;