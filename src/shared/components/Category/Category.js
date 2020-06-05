/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const Category = (props) => {
     // function to list the hash tags
    const { category, copiedHashtags, handleCopy, handleRemove, currentUser } =props;
    if(category.posts)
        return category.posts.map(p =>
            <Post post={p} key={p._id} isCopied={ p._id === copiedHashtags } onCopy={handleCopy} onRemove={handleRemove} isEditable={p.createdBy === currentUser}/>
        );
    return null;
}
Category.propTypes ={
    category: PropTypes.shape().isRequired,
    copiedHashtags: PropTypes.string,
    handleCopy: PropTypes.func,
    handleRemove: PropTypes.func,
    currentUser: PropTypes.string
}
Category.defaultProps ={
    copiedHashtags: null,
    handleCopy: () => {},
    handleRemove: () => {},
    currentUser: null
}
export default Category;