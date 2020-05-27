/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainContent.scss';
import Category from '../GroupedHashtags/Category';
import Categories from '../Categories/Categories';

export default class MainContentView extends Component{

    // fetch all the hashtags after mounting the component
    componentDidMount(){
        const { fetchCategories, fetchHashtagsByCategory }= this.props;
        fetchCategories();
        fetchHashtagsByCategory('popular');
    }

    handleCopy= (id) => {
        const { updateCopiedHashtags }= this.props;
        updateCopiedHashtags(id);
    } 

    render(){
        const { categories, categoryData, copiedHashtags } = this.props;
        return(
            <div className="m-5">
                <h3 className="display-5 d-flex justify-content-center"> Top HashTags</h3>
                <div className="container">
                    <div className="row grouped-hashtags-container my-3">
                        {console.log(categoryData)}
                        <Category category={categoryData} copiedHashtags={copiedHashtags} handleCopy={this.handleCopy}/>
                    </div>
                </div>
                {console.log(categories)}
                <Categories categories={categories}/>
            </div>
        );
        }
}
MainContentView.propTypes={
    categories: PropTypes.arrayOf(String).isRequired,
    categoryData: PropTypes.shape().isRequired,
    copiedHashtags: PropTypes.number,
    fetchCategories: PropTypes.func.isRequired,
    fetchHashtagsByCategory: PropTypes.func.isRequired,
    updateCopiedHashtags: PropTypes.func.isRequired
}
MainContentView.defaultProps ={
    copiedHashtags: null
}