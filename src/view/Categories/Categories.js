/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types'
import './Categories.scss';
import GroupedHashtags from '../GroupedHashtags/GroupedHashtags';

const Categories = (props) => {
    const { hashtags, copiedHashtags }= props;
    return ( 
        <>
            <h3 className='display-5 d-flex justify-content-center'>Categories</h3>
            {hashtags.map((h,i) =>{
                return <GroupedHashtags key={i} hashtags={ h.tags } copiedHashtags={ copiedHashtags }/>
            })}   
        </>
    );
}
Categories.propTypes= {
    hashtags: PropTypes.arrayOf(String).isRequired,
    copiedHashtags: PropTypes.number
}
Categories.defaultProps= {
    copiedHashtags: null
}
export default Categories;