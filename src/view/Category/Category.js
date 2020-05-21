import React from 'react';
import PropTypes from 'prop-types';
import './Category.scss';

const Category = (props) => {
    const { category } = props;
    return ( 
    <div className='category-container col m-2'>
        <h3 className=''>{category.name}</h3>
    </div> );
}
 Category.propTypes = {
    category: PropTypes.shape().isRequired
 }
export default Category;