import React, { Component } from "react";

export default class Hashtags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCopied: false
    };
  }
  handleCopy= ()=>{
      let {hasCopied} ={...this.state};
       if(!hasCopied)
        this.setState({hasCopied: true})
}   
  render() {
      let badgeColor = this.state.hasCopied === false ? "badge-info": "badge-danger";
      let copyBtnText= this.state.hasCopied=== false ? "copy": "copied";
    return (
      <div key={this.props.index} className="tag-container col m-2">
        <p>{this.props.tags.map(i => `${i} `)}</p>
        <div className="tag-stat-container">
          <i className="fa fa-heart"> {100 * this.props.index}</i>
          <p className={`badge ${badgeColor}`} onClick={this.handleCopy}>
            {copyBtnText}
          </p>
        </div>
      </div>
    );
  }
}
