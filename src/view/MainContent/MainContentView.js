/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainContent.scss';
import Hashtags from '../Hashtags/Hashtags';
import Categories from '../Categories/Categories';

export default class MainContentView extends Component{

    // fetch all the hashtags after mounting the component
    componentDidMount(){
        const { fetchTopHashtags }= this.props;
        fetchTopHashtags();
    }

    handleCopy= (id) => {
        const { updateCopiedHashtags }= this.props;
        updateCopiedHashtags(id);
    }  

    // function to list the hash tags
    listHashtags=() => {
        const { topTags, copiedHashtags } =this.props;
        return topTags.map((h,i)=>{
            return(
                <Hashtags tags={h} index={i} key={i} isCopied={ i === copiedHashtags } onCopy={this.handleCopy}/>
            );
        });
    }

    render(){
        const { listHashtags } = this;
        const { topTags } = this.props;
    return(
        <div className="m-5">
            <h3 className="display-5 d-flex justify-content-center"> Top Community HashTags</h3>
            <div className="container">
                <div className="row grouped-hashtags-container my-3">
                    {console.log(topTags)}
                    {listHashtags()}
                </div>
                <Categories/>
            </div>
        </div>
    );
    }
}
MainContentView.propTypes={
    topTags: PropTypes.arrayOf(String).isRequired,
    copiedHashtags: PropTypes.number,
    fetchTopHashtags: PropTypes.func.isRequired,
    updateCopiedHashtags: PropTypes.func.isRequired
}
MainContentView.defaultProps ={
    copiedHashtags: null
}