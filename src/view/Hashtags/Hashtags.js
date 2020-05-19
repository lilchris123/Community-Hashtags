/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from 'prop-types';
import './Hashtags.scss';

const Hashtags = (props) => {
      const { index, tags, isCopied, onCopy } = props;
      const badgeColor= isCopied === false ? "badge-info": "badge-danger";
      const copyBtnText= isCopied=== false ? "copy": "copied";
    return (
      <div key={index} className="hashtags-container col m-2">
        <p>{tags.map(i => `${i} `)}</p>
        <div className="hashtags-stat-container">
          <i className="fa fa-heart"> {100 * index}</i>
          <p className={`badge ${badgeColor}`} onClick={onCopy.bind(this, index)}>
            {copyBtnText}
          </p>
        </div>
      </div>
    );
  }

Hashtags.propTypes={
  index: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(String).isRequired,
  isCopied: PropTypes.bool.isRequired,
  onCopy: PropTypes.func.isRequired
}

export default Hashtags;
