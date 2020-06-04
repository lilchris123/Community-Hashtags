/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../../shared/components/Category/Category';
import CategoriesContainer from '../Categories/CategoriesContainer';
// import style from './MainContent.module.scss';

export default class MainContentView extends Component{

    // fetch all the hashtags after mounting the component
    componentDidMount(){
        const { fetchCategories, fetchHashtagsByCategory, getUserByToken }= this.props;
        fetchCategories();
        fetchHashtagsByCategory('popular');
        getUserByToken();
    }

    handleCopy= (id) => {
        const { updateCopiedHashtags }= this.props;
        updateCopiedHashtags(id);
    } 

    render(){
        const { categoryData, copiedHashtags } = this.props;
        return(
            <div className='mainContent'>
                <h3 className="display-5 d-flex justify-content-center"> Top HashTags</h3>
                <div className="container">
                    <div className="row grouped-hashtags-container my-3">
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
    updateCopiedHashtags: PropTypes.func.isRequired,
    getUserByToken: PropTypes.func.isRequired
}
MainContentView.defaultProps ={
    copiedHashtags: null
}