import { connect } from 'react-redux';
import * as Actions from '../../state-management/modules/mainContent';
import * as userActions from '../../state-management/modules/user';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import * as searchActions from '../../state-management/modules/search';
import * as searchSelectors from '../../state-management/modules/search/searchSelectors';
import mainContentSelector from '../../state-management/modules/rootSelector';
import SearchView from './SearchView';

const mapStateToProps = (state)=> {
    return {
        isLoading: mainContentSelector.getLoading(state),
        posts: searchSelectors.getPosts(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state),
        user: userSelectors.getUser(state),
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchPostsBySearch: (query) => dispatch(searchActions.fetchPostsBySearch(query)),
        updateCopiedHashtags: (id)=> dispatch(Actions.copiedHashtags(id)),
        updatePost: (post) => dispatch(userActions.updatePost(post)),
        removePost: (id) => dispatch(userActions.removePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);