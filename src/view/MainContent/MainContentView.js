/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainContent.scss';
import Category from '../../shared/components/Category/Category';
import CategoriesContainer from '../Categories/CategoriesContainer';

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
        const { categoryData, copiedHashtags } = this.props;
        return(
            <div className="m-5">
                <h3 className="display-5 d-flex justify-content-center"> Top HashTags</h3>
                <div className="container">
                    <div className="row grouped-hashtags-container my-3">
                        {console.log(categoryData)}
                        <Category category={categoryData} copiedHashtags={copiedHashtags} handleCopy={this.handleCopy}/>
                    </div>
                </div>
                <CategoriesContainer/>
            </div>
        );
        }
}
MainContentView.propTypes={
    categoryData: PropTypes.shape().isRequired,
    copiedHashtags: PropTypes.string,
    fetchCategories: PropTypes.func.isRequired,
    fetchHashtagsByCategory: PropTypes.func.isRequired,
    updateCopiedHashtags: PropTypes.func.isRequired
}
MainContentView.defaultProps ={
    copiedHashtags: null
}