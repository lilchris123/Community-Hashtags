/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainContent.scss';
import GroupedHashtags from '../GroupedHashtags/GroupedHashtags';
import Categories from '../Categories/Categories';

export default class MainContentView extends Component{

    // fetch all the hashtags after mounting the component
    componentDidMount(){
        const { fetchHashtags, fetchHashtagsByCategory }= this.props;
        fetchHashtags();
        fetchHashtagsByCategory('popular');
    }

    handleCopy= (id) => {
        const { updateCopiedHashtags }= this.props;
        updateCopiedHashtags(id);
    } 

    render(){
        const { hashtags, categoryHashtags, copiedHashtags } = this.props;
        return(
            <div className="m-5">
                <h3 className="display-5 d-flex justify-content-center"> Top Community HashTags</h3>
                <div className="container">
                    <div className="row grouped-hashtags-container my-3">
                        <GroupedHashtags hashtags={categoryHashtags} copiedHashtags={copiedHashtags} handleCopy={this.handleCopy}/>
                    </div>
                </div>
                <Categories categories={hashtags}/>
            </div>
        );
        }
}
MainContentView.propTypes={
    hashtags: PropTypes.arrayOf(String).isRequired,
    categoryHashtags: PropTypes.arrayOf(String).isRequired,
    copiedHashtags: PropTypes.number,
    fetchHashtags: PropTypes.func.isRequired,
    fetchHashtagsByCategory: PropTypes.func.isRequired,
    updateCopiedHashtags: PropTypes.func.isRequired
}
MainContentView.defaultProps ={
    copiedHashtags: null
}