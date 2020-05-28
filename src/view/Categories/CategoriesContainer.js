import { connect } from 'react-redux';
import * as Actions from '../../state-management/modules/mainContent';
import mainContentSelector from '../../state-management/modules/rootSelector';
import CategoriesView from './CategoriesView';

const mapStateToProps = (state)=> {
    return {
        isLoading: mainContentSelector.getLoading(state),
        categories: mainContentSelector.getCategories(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchCategories: ()=> dispatch(Actions.fetchCategories()),
        updateCopiedHashtags: (id)=> dispatch(Actions.copiedHashtags(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesView);