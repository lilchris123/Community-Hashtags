/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = (props) => {
     // function to list the hash tags
    const { posts, copiedHashtags, handleLike, handleCopy, handleUpdate, handleCreate, handleRemove, currentUser } =props;
    if(posts.posts)
        return posts.posts.map(p =>
            <Post post={p} key={p._id} isCopied={ p._id === copiedHashtags } onLike={handleLike} handleCreate={handleCreate} handleUpdate={handleUpdate} onCopy={handleCopy} onRemove={handleRemove} currentUser={currentUser}/>
        );
    return null;
}
PostList.propTypes ={
    posts: PropTypes.shape().isRequired,
    copiedHashtags: PropTypes.string,
    handleLike: PropTypes.func,
    handleCopy: PropTypes.func,
    handleRemove: PropTypes.func,
    handleUpdate: PropTypes.func,
    handleCreate: PropTypes.func,
    currentUser: PropTypes.string
}
PostList.defaultProps ={
    copiedHashtags: null,
    handleLike: () => {},
    handleCopy: () => {},
    handleRemove: () => {},
    handleUpdate: () => {},
    handleCreate: () => {},
    currentUser: null
}
export default PostList;