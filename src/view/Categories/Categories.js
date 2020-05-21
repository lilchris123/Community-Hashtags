/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types'
import './Categories.scss';
import Category from '../Category/Category';

const Categories = (props) => {
    const { categories }= props;
    return ( 
        <>
            <h3 className='d-flex justify-content-center'>Categories</h3>
            <div className='container'>
                <div className='row categories-container'>
                    { categories.map((c,i) =>
                    <Category key={i} category={c}/>) }
                </div>
            </div>
        </>
    );
}
Categories.propTypes= {
    categories: PropTypes.arrayOf(String).isRequired
}

export default Categories;