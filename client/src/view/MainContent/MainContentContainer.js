import { connect } from 'react-redux';
import * as mainActions from '../../state-management/modules/mainContent';
import * as userActions from '../../state-management/modules/user';
import mainContentSelector from '../../state-management/modules/rootSelector';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import MainContentView from './MainContentView';

const mapStateToProps = (state)=> {
    return {
        isLoadingMainContent: mainContentSelector.getLoading(state),
        isLoadingUser: userSelectors.getLoading(state),
        categories: mainContentSelector.getCategories(state),
        categoryData: mainContentSelector.getCategoryData(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state),
        isLoggedIn: userSelectors.getLoggedIn(state),
        user: userSelectors.getUser(state)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchCategories: ()=> dispatch(mainActions.fetchCategories()),
        fetchHashtagsByCategory: (category)=> dispatch(mainActions.fetchHashtagsByCategory(category)),
        updateCopiedHashtags: (id)=> dispatch(mainActions.copiedHashtags(id)),
        getUserByToken: () => dispatch(userActions.getUserFromToken()),
        likePost: (id) => dispatch(mainActions.likePost(id)),
        updatePost: (post) => dispatch(mainActions.updatePost(post)),
        removePost: (id) => dispatch(mainActions.removePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentView);