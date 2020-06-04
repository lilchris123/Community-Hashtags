import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../../shared/components/Category/Category';
// import style from './CategoryPage.module.scss';

class CategoryPageView extends Component{
    componentDidMount(){
        const { fetchHashtagsByCategory, match }= this.props;
        fetchHashtagsByCategory(match.params.category);
    }

    handleCopy= (id) => {
        const { updateCopiedHashtags }= this.props;
        updateCopiedHashtags(id);
    } 

    render(){
        const {categoryData, copiedHashtags} =this.props;
        return(
        <div className="mainContent">
        <h3 className="display-5 d-flex justify-content-center text-capitalize"> {categoryData.name}</h3>
        <div className="container">
            <div className="row grouped-hashtags-container my-3">
                <Category category={categoryData} copiedHashtags={copiedHashtags} handleCopy={this.handleCopy}/>
            </div>
        </div>
        </div>
        );
    }
}
CategoryPageView.propTypes={
    categoryData: PropTypes.shape().isRequired,
    copiedHashtags: PropTypes.string,
    match: PropTypes.shape().isRequired,
    fetchHashtagsByCategory: PropTypes.func.isRequired,
    updateCopiedHashtags: PropTypes.func.isRequired
}
CategoryPageView.defaultProps ={
    copiedHashtags: null
}
export default CategoryPageView;