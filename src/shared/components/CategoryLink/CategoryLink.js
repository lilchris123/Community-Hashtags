import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './CategoryLink.scss';

const CategoryLink = (props) => {
    const { category } = props;
    return ( 
    <div className='category-container col m-2'>
        <Link className='' to= {`/category/${category.name}`}> {category.name}</Link>
    </div> );
}
 CategoryLink.propTypes = {
    category: PropTypes.shape().isRequired
 }
export default CategoryLink;