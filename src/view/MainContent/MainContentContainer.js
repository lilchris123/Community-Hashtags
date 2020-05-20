import { connect } from 'react-redux';
import * as Actions from '../../state-management/modules/mainContent';
import mainContentSelector from '../../state-management/modules/rootSelector';
import MainContentView from './MainContentView';

const mapStateToProps = (state)=> {
    return {
        isLoading: mainContentSelector.getLoading(state),
        hashtags: mainContentSelector.getHashtags(state),
        categoryHashtags: mainContentSelector.getCategoryHashtags(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchHashtags: ()=> dispatch(Actions.fetchHashtags()),
        fetchHashtagsByCategory: (category)=> dispatch(Actions.fetchHashtagsByCategory(category)),
        updateCopiedHashtags: (id)=> dispatch(Actions.copiedHashtags(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentView);