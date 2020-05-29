import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const Category = (props) => {
     // function to list the hash tags
    const { category, copiedHashtags, handleCopy } =props;
    if(category.posts)
        return category.posts.map((p, i) =>
            <Post post={p} index={i} key={p.id} isCopied={ p.id === copiedHashtags } onCopy={handleCopy}/>
        );
    return null;
}
Category.propTypes ={
    category: PropTypes.shape().isRequired,
    copiedHashtags: PropTypes.string,
    handleCopy: PropTypes.func
}
Category.defaultProps ={
    copiedHashtags: null,
    handleCopy: () => {}
}
export default Category;