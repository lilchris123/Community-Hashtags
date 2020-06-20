import { connect } from 'react-redux';
import * as mainActions from '../../state-management/modules/mainContent';
import mainContentSelector from '../../state-management/modules/rootSelector';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import MainContentView from './MainContentView';

const mapStateToProps = (state)=> {
    return {
        isLoading: mainContentSelector.getLoading(state),
        categories: mainContentSelector.getCategories(state),
        posts: mainContentSelector.getCategoryData(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state),
        user: userSelectors.getUser(state)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchCategories: ()=> dispatch(mainActions.fetchCategories()),
        fetchHashtagsByCategory: (category)=> dispatch(mainActions.fetchHashtagsByCategory(category)),
        updateCopiedHashtags: (id)=> dispatch(mainActions.copiedHashtags(id)),
        likePost: (id) => dispatch(mainActions.likePost(id)),
        updatePost: (post) => dispatch(mainActions.updatePost(post)),
        removePost: (id) => dispatch(mainActions.removePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentView);