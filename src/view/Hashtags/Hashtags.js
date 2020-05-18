/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Hashtags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCopied: false
    };
  }

  handleCopy= () => {
    const { hasCopied } ={...this.state};
    if(!hasCopied)
      this.setState({hasCopied: true})
}   

  render() {
      const { hasCopied } = this.state;
      const { index, tags } = this.props;
      const badgeColor= hasCopied === false ? "badge-info": "badge-danger";
      const copyBtnText= hasCopied=== false ? "copy": "copied";
    return (
      <div key={index} className="tag-container col m-2">
        <p>{tags.map(i => `${i} `)}</p>
        <div className="tag-stat-container">
          <i className="fa fa-heart"> {100 * index}</i>
          <p className={`badge ${badgeColor}`} onClick={this.handleCopy}>
            {copyBtnText}
          </p>
        </div>
      </div>
    );
  }
}

Hashtags.propTypes={
  index: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(String).isRequired
}
