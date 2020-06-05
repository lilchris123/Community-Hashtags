import { connect } from 'react-redux';
import * as Actions from '../../state-management/modules/mainContent';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import mainContentSelector from '../../state-management/modules/rootSelector';
import CategoryPageView from './CategoryPageView';

const mapStateToProps = (state)=> {
    return {
        isLoading: mainContentSelector.getLoading(state),
        categoryData: mainContentSelector.getCategoryData(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state),
        user: userSelectors.getUser(state),
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchHashtagsByCategory: (category)=> dispatch(Actions.fetchHashtagsByCategory(category)),
        updateCopiedHashtags: (id)=> dispatch(Actions.copiedHashtags(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPageView);