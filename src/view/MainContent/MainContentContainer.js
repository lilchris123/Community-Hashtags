import { connect } from 'react-redux';
import * as Actions from '../../state-management/modules/mainContent';
import mainContentSelector from '../../state-management/modules/rootSelector';
import MainContentView from './MainContentView';

const mapStateToProps = (state)=> {
    return {
        isLoading: mainContentSelector.getLoading(state),
        categories: mainContentSelector.getCategories(state),
        categoryData: mainContentSelector.getCategoryData(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchCategories: ()=> dispatch(Actions.fetchCategories()),
        fetchHashtagsByCategory: (category)=> dispatch(Actions.fetchHashtagsByCategory(category)),
        updateCopiedHashtags: (id)=> dispatch(Actions.copiedHashtags(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentView);