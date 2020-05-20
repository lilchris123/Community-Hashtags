/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Hashtags from '../Hashtags/Hashtags';

const GroupedHashtags = (props) => {
     // function to list the hash tags
    const { hashtags, copiedHashtags, handleCopy } =props;
    return hashtags.map((h,i)=>{
        return(
            <Hashtags tags={h} index={i} key={i} isCopied={ i === copiedHashtags } onCopy={handleCopy}/>
        );
    });
}
GroupedHashtags.propTypes ={
    hashtags: PropTypes.arrayOf(String),
    copiedHashtags: PropTypes.number,
    handleCopy: PropTypes.func
}
GroupedHashtags.defaultProps ={
    copiedHashtags: null,
    handleCopy: () => {}
}
export default GroupedHashtags;