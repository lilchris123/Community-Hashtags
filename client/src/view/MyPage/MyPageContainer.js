import {connect} from 'react-redux';
import * as userActions  from '../../state-management/modules/user';
import * as mainActions  from '../../state-management/modules/mainContent';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import mainContentSelector from '../../state-management/modules/rootSelector';
import MyPageView from './MyPageView';

const mapStateToProps = (state) =>{
    return{
        user: userSelectors.getUser(state),
        posts: userSelectors.getPosts(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state),
        isLoading: userSelectors.getLoading(state)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        logoutUser: () => dispatch(userActions.logoutUser()),
        updateCopiedHashtags: (id)=> dispatch(mainActions.copiedHashtags(id)),
        fetchUserPosts: () => dispatch(userActions.fetchUserPosts()),
        likePost: (id) => dispatch(userActions.likePost(id)),
        removePost: (id) => dispatch(userActions.removePost(id)),
        createPost: (post) => dispatch(userActions.createPost(post)),
        updatePost: (post) => dispatch(userActions.updatePost(post))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MyPageView) ;