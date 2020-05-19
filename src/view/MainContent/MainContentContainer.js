import { connect } from 'react-redux';
import * as Actions from '../../state-management/modules/mainContent';
import mainContentSelector from '../../state-management/modules/rootSelector';
import MainContentView from './MainContentView';

const mapStateToProps = (state)=> {
    return {
        isLoading: mainContentSelector.getLoading(state),
        topTags: mainContentSelector.getTopTags(state),
        copiedHashtags: mainContentSelector.getCopiedHashtags(state)
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        fetchTopHashtags: ()=> dispatch(Actions.fetchTopHashtags()),
        updateCopiedHashtags: (id)=> dispatch(Actions.copiedHashtags(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentView);