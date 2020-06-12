import { connect } from 'react-redux';
import * as Actions from '../../state-management/modules/mainContent';
import mainContentSelector from '../../state-management/modules/rootSelector';
import CategoriesView from './CategoriesView';

const mapStateToProps = (state)=> {
    return {
        isLoading: mainContentSelector.getLoading(state),
        categories: mainContentSelector.getCategories(state)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchCategories: ()=> dispatch(Actions.fetchCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesView);