/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const Category = (props) => {
     // function to list the hash tags
    const { category, copiedHashtags, handleCopy, handleUpdate, handleCreate, handleRemove, currentUser } =props;
    if(category.posts)
        return category.posts.map(p =>
            <Post post={p} key={p._id} isCopied={ p._id === copiedHashtags } handleCreate={handleCreate} handleUpdate={handleUpdate} onCopy={handleCopy} onRemove={handleRemove} currentUser={currentUser}/>
        );
    return null;
}
Category.propTypes ={
    category: PropTypes.shape().isRequired,
    copiedHashtags: PropTypes.string,
    handleCopy: PropTypes.func,
    handleRemove: PropTypes.func,
    handleUpdate: PropTypes.func,
    handleCreate: PropTypes.func,
    currentUser: PropTypes.string
}
Category.defaultProps ={
    copiedHashtags: null,
    handleCopy: () => {},
    handleRemove: () => {},
    handleUpdate: () => {},
    handleCreate: () => {},
    currentUser: null
}
export default Category;