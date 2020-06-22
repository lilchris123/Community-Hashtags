import { connect } from 'react-redux';
import * as Actions from '../../state-management/modules/mainContent';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import mainContentSelector from '../../state-management/modules/rootSelector';
import PostsPageView from './PostsPageView';

const mapStateToProps = (state)=> {
    return {
        isLoading: mainContentSelector.getLoading(state),
        posts: mainContentSelector.getCategoryData(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state),
        user: userSelectors.getUser(state)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchHashtagsByCategory: (category)=> dispatch(Actions.fetchHashtagsByCategory(category)),
        updateCopiedHashtags: (id)=> dispatch(Actions.copiedHashtags(id)),
        likePost: (id) => dispatch(Actions.likePost(id)),
        updatePost: (post) => dispatch(Actions.updatePost(post)),
        removePost: (id) => dispatch(Actions.removePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPageView);