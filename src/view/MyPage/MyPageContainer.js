import {connect} from 'react-redux';
import * as userActions  from '../../state-management/modules/user';
import * as mainActions  from '../../state-management/modules/mainContent';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import mainContentSelector from '../../state-management/modules/rootSelector';
import MyPageView from './MyPageView';

const mapStateToProps = (state) =>{
    return{
        user: userSelectors.getUser(state),
        isLoggedIn: userSelectors.getLoggedIn(state),
        posts: userSelectors.getPosts(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state),
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getUserFromToken: () => dispatch(userActions.getUserFromToken()),
        logoutUser: () => dispatch(userActions.logoutUser()),
        updateCopiedHashtags: (id)=> dispatch(mainActions.copiedHashtags(id)),
        fetchUserPosts: () => dispatch(userActions.fetchUserPosts()),
        removePost: (id) => dispatch(userActions.removePost(id))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MyPageView) ;