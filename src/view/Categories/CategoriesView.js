import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Categories from '../../shared/components/CategoriesDisplay/Categories';

class CategoriesView extends Component {
    componentDidMount(){
        const { fetchCategories}= this.props;
        fetchCategories();
    }

    render(){
        const { categories }= this.props;
        return(
            <div className="mainContent">
            <h3 className="display-5 d-flex justify-content-center text-capitalize">List of Categories</h3>
            <div className="container">
                <div className="row grouped-hashtags-container my-3">
                    <Categories categories={categories}/>
                </div>
            </div>
            </div>
        );
    }
}

CategoriesView.propTypes={
    categories: PropTypes.arrayOf(String).isRequired,
    fetchCategories: PropTypes.func.isRequired,
}

export default CategoriesView;