import { connect } from 'react-redux';
import * as Actions from '../../state-management/modules/mainContent';
import * as userSelectors from '../../state-management/modules/user/userSelectors';
import mainContentSelector from '../../state-management/modules/rootSelector';
import SearchView from './SearchView';

const mapStateToProps = (state)=> {
    return {
        isLoading: mainContentSelector.getLoading(state),
        posts: mainContentSelector.getCategoryData(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state),
        user: userSelectors.getUser(state),
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchPostsBySearch: (query) => dispatch(Actions.fetchPostsBySearch(query)),
        updateCopiedHashtags: (id)=> dispatch(Actions.copiedHashtags(id)),
        updatePost: (post) => dispatch(Actions.updatePost(post)),
        removePost: (id) => dispatch(Actions.removePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);