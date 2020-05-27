/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Hashtags/Post';

const Category = (props) => {
     // function to list the hash tags
    const { category, copiedHashtags, handleCopy } =props;
    console.log(category)
    if(category.posts)
        return category.posts.map((p, i) =>
            <Post post={p} index={i} key={i} isCopied={ i === copiedHashtags } onCopy={handleCopy}/>
        );
    return null;
}
Category.propTypes ={
    category: PropTypes.shape().isRequired,
    copiedHashtags: PropTypes.number,
    handleCopy: PropTypes.func
}
Category.defaultProps ={
    copiedHashtags: null,
    handleCopy: () => {}
}
export default Category;