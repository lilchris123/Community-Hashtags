import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Categories from '../../shared/components/CategoriesDisplay/Categories';

class CategoriesView extends Component {
    componentDidMount(){
        const { fetchCategories}= this.props;
        fetchCategories();
    }

    handleCopy= (id) => {
        const { updateCopiedHashtags }= this.props;
        updateCopiedHashtags(id);
    } 

    render(){
        const {categories, copiedHashtags}= this.props;
        return(
            <div className="mainContent">
            <h3 className="display-5 d-flex justify-content-center text-capitalize">List of Categories</h3>
            <div className="container">
                <div className="row grouped-hashtags-container my-3">
                    <Categories categories={categories} copiedHashtags={copiedHashtags} handleCopy={this.handleCopy}/>
                </div>
            </div>
            </div>
        );
    }
}

CategoriesView.propTypes={
    categories: PropTypes.arrayOf(String).isRequired,
    copiedHashtags: PropTypes.string,
    fetchCategories: PropTypes.func.isRequired,
    updateCopiedHashtags: PropTypes.func.isRequired
}

CategoriesView.defaultProps ={
    copiedHashtags: null
}

export default CategoriesView;